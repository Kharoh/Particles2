/**
 * Create a new Particle given the context of the canvas she will be on
 * @param ctx - The context of the canvas the particle will be on
 */
export default class Particle {

  /**
   * Create a new Particle given the context of the canvas she will be on
   * @param ctx - The context of the canvas the particle will be on
   */
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
    this.x = this.canvas.width / 2
    this.y = this.canvas.height / 2

    /* Set the appearance of the particle */
    this.radius = 3
    this.color = '#f3abfd'

  }


  /**
   * Render the particle on the context
   */
  render() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.lineWidth = 2
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
  }

  /**
   * Move the particle and return false if it wont exist anymore
   */
  move(): boolean {
    /* Save the old positions */
    this.prevX = this.x
    this.prevY = this.y

    /* Move the particle */
    this.x += 0.5
    this.y += 0.5

    /* If it is now outside the borders of the ctx, return false */
    if ((this.x < 0 || this.x > this.canvas.width) || (this.y < 0 || this.y > this.canvas.height)) {
      return false
    }

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
   * The radius of the particle
   */
  public radius: number

  /**
   * The color of the particle (hex)
   */
  public color: string

}