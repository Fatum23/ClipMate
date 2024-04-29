// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
    image::Image,
    menu::{MenuBuilder, MenuItemBuilder},
    tray::{ClickType, TrayIconBuilder},
    AppHandle, Manager, PhysicalPosition,
};

#[tauri::command]
fn toggle_window(app: AppHandle) {
    let win = app.get_webview_window("main").unwrap();

    if win.is_visible().unwrap() {
        let _ = win.as_ref().window().hide();
    } else {
        let monitor = win.current_monitor().unwrap();
        if let Some(monitor) = monitor {
            win.set_position(PhysicalPosition {
                x: monitor.size().width - (350 as f32 * 1.25) as u32 - 10,
                y: monitor.size().height - (500 as f32 * 1.25) as u32 - 60,
            })
            .unwrap();
        }

        let _ = win.as_ref().window().show();
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .setup(|app| {
            let quit = MenuItemBuilder::new("Quit").id("quit").build(app).unwrap();
            let menu = MenuBuilder::new(app).items(&[&quit]).build().unwrap();
            let _tray = TrayIconBuilder::new()
                .tooltip("ClipMate")
                .icon(Image::from_path("../src/shared/assets/images/icon.png")?)
                .on_tray_icon_event(|tray, event| {
                    if event.click_type == ClickType::Left {
                        let app = tray.app_handle();
                        if let Some(webview_window) = app.get_webview_window("main") {
                            let _ = webview_window.as_ref().window().show();
                        }
                    }
                })
                .menu(&menu)
                .on_menu_event(|_handle, _event| {
                    std::process::exit(0);
                })
                .build(app)?;

            toggle_window(app.app_handle().clone());
            Ok(())
        })
        .on_window_event(|window, event| match event {
            tauri::WindowEvent::CloseRequested { api, .. } => {
                window.hide().unwrap();
                api.prevent_close();
            }
            _ => {}
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![toggle_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
