import React, {useCallback, useState} from "react";
import s from './Settings.module.css';
import {FormControlLabel, Switch} from "@mui/material";
import {loadFull} from "tsparticles";
import Particles from "react-particles";

export const Settings = () => {
  const [isWinter, setIsWinter] = useState(false)

  const handleChange = () => {
    setIsWinter(!isWinter)
  }

  const init = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

    return (
        <div className={s.settingsPage}>
          {isWinter && <Particles options={{
            particles: {
              preset: "snow",
              color: {
                value: '#fff'
              },
              number: {
                value: 1000,
              },
              opacity: {
                value: {min: 0.3, max: 0.8}
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {min: 1, max: 3}
              },
              move: {
                direction: 'bottom-right',
                enable: true,
                speed: {min: 0.5, max: 1.5},
                straight: true
              },
              detectRetina: true,
            }
          }} init={init}/>
          }
          <FormControlLabel
            control={
              <Switch
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Turn On Winter"
          />
        </div>
    )
}