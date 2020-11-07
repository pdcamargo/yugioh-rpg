/* eslint-disable no-console */
class Logger {
  private canLogMessage: boolean;

  constructor() {
    this.canLogMessage = process.env.NODE_ENV !== 'production';
  }

  public info(message: string, title?: string) {
    if (!this.canLogMessage) return;

    console.group(`[${title || 'logging'}]`);
    console.info(message);
    console.groupEnd();
  }
}

export const logger = new Logger();
