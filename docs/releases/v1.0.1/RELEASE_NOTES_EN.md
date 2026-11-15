## EpiOrbit 1.0.1 (Windows) — Maintenance update

### New features
- **Local response cache** for TMDB, TVmaze and OMDb (memory and disk), kept across Windows restarts.
- **System diagnostics** shows how many internet requests were made and how many were saved by the cache.
- **Real "Start with Windows" state** in Settings: active, blocked by Windows, missing file or another copy.
- **About panel** with the EpiOrbit logo and the official TMDB logo next to the attribution notice.

### Improvements
- Each kind of data has its own lifetime (e.g. external IDs 30 days, providers 24 h, episode dates 6–12 h).
- Identical simultaneous requests share a single connection.
- When offline, the app uses the last known information instead of showing an error.
- Search no longer makes 2 extra requests when the results already match the search term.
- Notification checks reuse recent providers, IDs and TVmaze data; release dates are still refreshed.
- Limited parallel requests and an automatic retry when TMDB asks to slow down (HTTP 429).
- The first time it starts minimized, the app shows a notice that it is in the system tray.
- When started by Windows, the first notification check waits 45 s for the network.
- WebView2 is initialized before the window is hidden in the system tray.

### Bug fixes
- "Start EpiOrbit with Windows" and "Start minimized" were only applied after pressing "Save"; they now apply immediately.
- Autostart did not work if EpiOrbit had ever been disabled in Task Manager; enabling the option in the app now re-authorizes it.
- The startup entry could point to a file that no longer existed (app moved or old version); it is now repaired when the app opens.
- After saving preferences, the startup checkbox could show a state different from the real one.
- When started by Windows, the working folder was `C:\Windows\System32`; it is now the app folder.

### Compatibility changes
- Installs **over 1.0.0**: lists, history, settings and keys are kept (same app identifier and same data folder `%LOCALAPPDATA%\EpiOrbit`).
- New folder `%LOCALAPPDATA%\EpiOrbit\Cache\Api`: contains no API keys, is not included in backups, cleans itself after 45 days and can be deleted without losing data.
- Uninstalling also removes the Windows startup approval created by EpiOrbit.
- Requirements unchanged: Windows 10/11 x64; the installer adds Microsoft WebView2 if needed.

### Known issues
- The installer is not digitally signed: Windows SmartScreen may show "Unknown publisher" (choose "More info" › "Run anyway").
- Request savings appear after the first use, once the cache holds data.

### How to update
1. Close EpiOrbit (including the tray icon › "Exit EpiOrbit").
2. Download and run `EpiOrbit_Setup_1.0.1_x64.exe`.
3. Open EpiOrbit once from the Start menu.
4. If you use autostart, check Settings › Notifications shows "Active".
