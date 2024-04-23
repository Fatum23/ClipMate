// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, PhysicalPosition};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let win = app.get_webview_window("main").unwrap();

            let monitor = win.current_monitor().unwrap();
            if let Some(monitor) = monitor {
                win.set_position(PhysicalPosition {
                    x: monitor.size().width - 385,
                    y: monitor.size().height - 560,
                })
                .unwrap();
            }
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
