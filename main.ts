cubeGrip.onChange(function (strength) {
    cubeVibe.start(strength)
})
cubeTouch.onPinReleased(function (face) {
    cubeLight.setBrightness(0)
})
cubeTouch.onPinStuck(function (face) {
    cubeLight.setColor(neopixel.colors(NeoPixelColors.Red))
    cubeLight.setBrightness(9)
})
cubePair.setRole(CubeRole.Grip)
