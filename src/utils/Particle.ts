/**
 * Create a new Particle given the context of the canvas she will be on
 * @param ctx - The context of the canvas the particle will be on
 */
export default class Particle {
  constructor(

    /**
     * The context of the canvas that the particle will be on
     */
    protected readonly ctx: CanvasRenderingContext2D

  ) {

    /* Retrieve the canvas from the context */
    this.canvas = ctx.canvas

    /* Generate a random number to use it later to create random particles */
    const random = Math.random()

    /* Set the position of the particle on the canvas */
    this.x = this.canvas.width / 2 + (Math.random() * 2 - 1) * 200 + 1000000000000
    this.y = this.canvas.height / 2 + (Math.random() * 2 - 1) * 200 + 1000000000000

    this.vector = [Math.cos(random * Math.PI * 2), Math.sin(random * Math.PI * 2)]

    /* Set the appearance of the particle */
    this.radius = 2
    this.color = ['#f3abfd', '#8bc3f7', '#f8ed93', '#abfdb9'][Math.floor(Math.random() * 4)]

  }


  /**
   * Render the particle on the context
   */
  render() {
    this.ctx.beginPath()
    this.ctx.arc(this.x % this.canvas.width, this.y % this.canvas.height, this.radius, 0, 2 * Math.PI)
    this.ctx.lineWidth = 2
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
  }

  /**
   * Move the particle and return false if it wont exist anymore
   */
  move(particles: Particle[]): boolean {
    /* Save the old positions */
    this.prevX = this.x
    this.prevY = this.y

    /* Working the attraction center for the particles */
    const attraction = particles.reduce((acc, particle) => [acc[0] + particle.x, acc[1] + particle.y], [0, 0]).map(val => val / particles.length)
    /* Where the particle should go relative to its coordinates to join the attration center */
    const rawAttractionVector = [attraction[0] - this.x, attraction[1] - this.y]
    /* Working the norm of the vector so we can know the distance of the particle from the center and resize the vector */
    // const norm = Math.sqrt(rawAttractionVector[0] ** 2 + rawAttractionVector[1] ** 2)
    const geometryIndex = 2
    const norm = Math.pow(Math.pow(Math.abs(rawAttractionVector[0]), geometryIndex) + Math.pow(Math.abs(rawAttractionVector[1]), geometryIndex), 1 / geometryIndex)
    /* Resizing the raw attraction vector */
    const attractionVector = rawAttractionVector.map(val => norm ? val / norm : val)

    /* Changing the direction vector of the particle */
    this.vector = [
      this.vector[0] + attractionVector[0],
      this.vector[1] + attractionVector[1]
    ]

    /* Move the particle */
    this.x += this.vector[0]
    this.y += this.vector[1]

    /* Render the particle at the new position */
    this.render()

    /* Return true so to tell the particle is nicely on the context */
    return true
  }



  /**
   * The canvas element of the given context
   */
  protected readonly canvas: HTMLCanvasElement

  /**
   * The x position of the particle
   */
  public x: number

  /**
   * The y position of the particle
   */
  public y: number

  /**
   * The latest x position of the particle
   */
  public prevX: number

  /**
   * The latest y position of the particle
   */
  public prevY: number

  /**
   * The speed vector, mapping the speed and direction of the particle, first value is x modifier and second is y
   */
  public vector: number[]

  /**
   * The radius of the particle
   */
  public radius: number

  /**
   * The color of the particle (hex)
   */
  public color: string

}