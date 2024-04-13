// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

const huCustomTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#314152',
    // surface: '#FFFFFF',
    // primary: '#6200EE',
    primary: '#ff00ff',
    'primary-darken-1': '#3700B3',
    secondary: '#FFFFFF',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

export default createVuetify({
  theme: {
    defaultTheme: 'huCustomTheme',
    themes: {
      huCustomTheme,
    }
  }
});
