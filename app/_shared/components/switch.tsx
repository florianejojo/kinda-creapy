import { Switch } from "@mui/material"
import React from "react"
import Spacer from "./spacer"

interface CustomSwitchProps<T> {
  id: string
  label?: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const CustomSwitch: React.FC<CustomSwitchProps<any>> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      {label && (
        <label htmlFor={id} className="font-semibold text-gray-100 dark:text-gray-300">
          {label}
        </label>
      )}
      <Spacer size={12} horizontal={true} />
      <Switch
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        sx={{ "& .MuiSwitch-track": { backgroundColor: "#aaa" } }}
      />
    </div>
  )
}

export default CustomSwitch
