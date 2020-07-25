import Particle from './utils/Particle'
import ParticlesGround from './utils/ParticlesGround'

const width = 800
const height = 800

const maxFrame = Infinity
let frame = 0

const particlesGround = new ParticlesGround(width, height)

for (let i = 0; i < 3; i++) {
  particlesGround.createParticle(Particle)
}

(function updateFrame() {
  /* Update the canvas */
  particlesGround.update()
  particlesGround.clear()

  if (frame < maxFrame) requestAnimationFrame(() => {
    frame++
    updateFrame()
  })
})()
