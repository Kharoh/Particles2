import Particle from "./Particle"

/**
 * Create a new canvas to manipulate particles
 */
export default class ParticlesGround {
  constructor(

    /**
     * The width of the canvas
     */
    public readonly width: number,

    /**
     * The height of the canvas
     */
    public readonly height: number

  ) {

    /* Create the new canvas element */
    this.canvas = document.createElement('canvas')
    this.canvas.width = width
    this.canvas.height = height
    document.body.appendChild(this.canvas)

    /* Retrieve the context */
    this.context = this.canvas.getContext('2d')

    /* Create the array of particles the canvas contains */
    this.particles = []

    /* Clear the canvas */
    this.clear()

  }

  /**
   * Clear the canvas and add the gradient to it, needed before initialization
   */
  public clear(): void {
    /* Create the gradient */
    const gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, this.width)
    gradient.addColorStop(0, "rgba(18,18,18,0.1)")
    gradient.addColorStop(1, "rgba(18,18,18,0.1)")

    /* Add the gradient to the canvas */
    this.context.fillStyle = gradient
    this.context.fillRect(0, 0, this.width, this.height)
  }

  /**
   * Update all the particles to make them move on the canvas
   */
  public update(): void {
    /* Move the particles and remove the ones outside the board */
    this.particles = this.particles.filter(particle => particle.move(this.particles))
  }

  /**
   * Create a new particle on the canvas
   * @param particleConstructor - The constructor of the new particle to add
   */
  public createParticle(particleConstructor: typeof Particle): void {
    this.particles.push(new particleConstructor(this.context))
  }

  /**
   * The canvas element of this particle canvas
   */
  public canvas: HTMLCanvasElement

  /**
   * The 2d context of the current canvas
   */
  public context: CanvasRenderingContext2D

  /**
   * The array of particles on the canvas
   */
  public particles: Particle[]
}
