class YouTubeChannel {
  constructor(name) {
    this.name = name;
    this.subscribers = new Set();
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    console.log(`Server: ${subscriber.name} has subscribed to ${this.name}`);
  }

  unsubscribe(subscriber) {
    console.log(`Server: ${subscriber.name} has unsubscribed from ${this.name}`);
    this.subscribers.delete(subscriber);
  }

  releaseVideo(title) {
    for (const subscriber of this.subscribers) {
      subscriber.sendNotification(this.name, `New Video From ${this.name}: ${title}`);
    }
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  sendNotification(name, data) {
    console.log(`${this.name}: ${name} - ${data}`);
  }
}

const channel_fishy = new YouTubeChannel("Fishy");
const channel_beast = new YouTubeChannel("mrbeast!");

const bob = new Subscriber("bob123");
const sue = new Subscriber("sue711");
const joe = new Subscriber("joeyyyy");

channel_fishy.subscribe(bob);
channel_fishy.subscribe(joe);

channel_beast.subscribe(sue);

channel_beast.releaseVideo("1 MILLION DOLLARS");
channel_fishy.releaseVideo("C++ vs Java");

channel_fishy.unsubscribe(joe);

channel_fishy.releaseVideo("HOW To Fish like a pro");