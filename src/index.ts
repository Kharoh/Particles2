import Particle from './utils/Particle'
import ParticlesCanvas from './utils/ParticlesCanvas'

const width = document.body.clientWidth
const height = document.body.clientHeight

const maxFrame = -1
let frame = 0

const particlesCanvas = new ParticlesCanvas(width, height)

for (let i = 0; i < 10; i++) {
  particlesCanvas.createParticle(Particle)
}

(function updateFrame() {
  /* Update the canvas */
  particlesCanvas.update()
  particlesCanvas.clear()

  if (maxFrame === -1 || frame < maxFrame) requestAnimationFrame(() => {
    frame++
    updateFrame()
  })
})()
