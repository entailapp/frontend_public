export type EntailTheme = 'dark' | 'light';

/**
 * Gets the users current theme setting, either 'dark' or 'light'.
 * The theme can be set one of three ways.
 *   - light: use light mode
 *   - dark: use dark mode
 *   - system: use whatever the user has their system set to
 *
 * For now this just returns 'dark' because suddenly 'useColorScheme' broke
 * and I could not see the app in dark mode, this also allows for easy debugging
 * of UIs in both light and dark, by changing this value rather than the system
 * settings.
 *
 * TODO: Use useColorScheme, combined with some sort of local setting.
 */
export default function useTheme(): EntailTheme {
  return 'dark';
}
