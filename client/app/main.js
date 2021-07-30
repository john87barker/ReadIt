import { AuthController } from './Controllers/AuthController.js'
import { SocketTestController } from './Controllers/SocketTestController.js'

class App {
  authController = new AuthController();
  socketTestController = new SocketTestController();
}

// @ts-ignore
window.app = new App()
