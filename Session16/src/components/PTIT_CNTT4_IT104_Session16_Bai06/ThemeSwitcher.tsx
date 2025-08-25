import React, { Component } from 'react';
import './ThemeSwitcher.css';

interface ThemeSwitcherState {
  isDarkMode: boolean;
}

class ThemeSwitcher extends Component<object, ThemeSwitcherState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    const themeText = isDarkMode
      ? 'Chế độ Tối đang bật'
      : 'Chế độ Sáng đang bật';

    return (
      <div className={themeClass}>
        <h2>{themeText}</h2>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </div>
    );
  }
}

export default ThemeSwitcher;
