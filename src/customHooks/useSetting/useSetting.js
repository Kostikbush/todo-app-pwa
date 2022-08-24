import { useState } from "react";

export const useSetting = () => {
    const [showTheme, setShowTheme] = useState(false);
    const [showFont, setShowFont] = useState(false);
    const [settingVeu, setSettingVeu] = useState(false);
    const handleSettingTheme = () => {
        setShowTheme(!showTheme)
    }  

    const handleSettingFont = () => {
        setShowFont(!showFont)
    }
    const handleSettings = () => {
        setSettingVeu(!settingVeu);  
      }
    return {
        handleSettings,
        handleSettingFont,
        handleSettingTheme,
        setSettingVeu,
        showTheme,
        showFont,
        settingVeu
    }
}