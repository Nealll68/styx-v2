import { ApplicationContract} from '@ioc:Adonis/Core/Application'

import ArmaServer from 'App/Services/Arma/Server'
import ArmaProfile from 'App/Services/Arma/Profile'
import SteamConsole from 'App/Services/Steam/Console'

export default class AppProvider {
	public static needsApplication = true

  constructor (protected app: ApplicationContract) {
  }

  public register () {
    this.app.container.singleton('Styx/Steam/Console', () => new SteamConsole())
    this.app.container.singleton('Styx/Arma/Profile', () => new ArmaProfile())
    this.app.container.singleton('Styx/Arma/Server', () => new ArmaServer())
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
    // App is ready    
    const App = await import('@ioc:Adonis/Core/Application')

    /**
     * Only import socket file, when environment is `web`. In other
     * words do not import during ace commands.
     */
    if (App.default.environment === 'web') {
      await import('../start/socket')
    }
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
