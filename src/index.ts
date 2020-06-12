import Particle from './utils/Particle'
import ParticlesGround from './utils/ParticlesGround'

const width = document.body.clientWidth
const height = document.body.clientHeight

const maxFrame = 200
let frame = 0

const particlesGround = new ParticlesGround(width, height)

for (let i = 0; i < 10; i++) {
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
