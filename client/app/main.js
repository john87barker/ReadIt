import { AuthController } from './Controllers/AuthController.js'
import { SocketTestController } from './Controllers/SocketTestController.js'
import StoriesController from './Controllers/StoriesController.js'

class App {
  authController = new AuthController();
  socketTestController = new SocketTestController();
  storiesController = new StoriesController();

  // commentsController = new CommentsController();
}

// @ts-ignore
window.app = new App()
