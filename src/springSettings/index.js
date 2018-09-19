import PropTypes from "prop-types"
import { isObject, assign } from "../utilities"

export const getSpringInterface = () => ({
  stiffness: PropTypes.number,
  damping: PropTypes.number,
  overshootClamping: PropTypes.bool
})

// adapted from
// https://github.com/chenglou/react-motion/blob/master/src/presets.js
export const springPresets = {
  noWobble: { stiffness: 200, damping: 26 },
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 260, damping: 26 }
}

export const getSpringConfig = ({ flipperSpring, flippedSpring } = {}) => {
  const normalizeSpring = spring => {
    if (isObject(spring)) return spring
    else if (springPresets[spring]) return springPresets[spring]
    else return {}
  }

  return assign(
    {},
    springPresets.noWobble,
    normalizeSpring(flipperSpring),
    normalizeSpring(flippedSpring)
  )
}
