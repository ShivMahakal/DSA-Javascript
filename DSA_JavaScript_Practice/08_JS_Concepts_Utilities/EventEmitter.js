/**
 * Topic: Custom Event Emitter (Pub/Sub Pattern)
 * Implement a simple EventEmitter class — very common in interviews.
 * Supports: on, off, emit, once
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Subscribe to an event
   */
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this; // for chaining
  }

  /**
   * Unsubscribe from an event
   */
  off(event, listener) {
    if (!this.events[event]) return this;

    this.events[event] = this.events[event].filter((fn) => fn !== listener);
    return this;
  }

  /**
   * Emit an event — call all listeners with provided arguments
   */
  emit(event, ...args) {
    if (!this.events[event]) return false;

    this.events[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  /**
   * Subscribe once — listener auto-removes after first call
   */
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
    return this;
  }

  /**
   * Remove all listeners for an event (or all events)
   */
  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }

  /**
   * Get listener count for an event
   */
  listenerCount(event) {
    return this.events[event] ? this.events[event].length : 0;
  }
}

// Example usage
const emitter = new EventEmitter();

// Subscribe to 'message' event
const onMessage = (data) => console.log("Message received:", data);
emitter.on("message", onMessage);

// Subscribe to 'error' event
emitter.on("error", (err) => console.log("Error:", err));

// Once — fires only once
emitter.once("connection", (user) => console.log("User connected:", user));

// Emit events
console.log("=== Emitting events ===");
emitter.emit("message", "Hello World!");    // Message received: Hello World!
emitter.emit("message", "How are you?");    // Message received: How are you?
emitter.emit("error", "Something broke");   // Error: Something broke

console.log("\n=== Once (fires only once) ===");
emitter.emit("connection", "Shivam");       // User connected: Shivam
emitter.emit("connection", "Rahul");        // (nothing — already removed)

console.log("\n=== Unsubscribe ===");
emitter.off("message", onMessage);
emitter.emit("message", "This won't show"); // (nothing)

console.log("\nListener count for 'error':", emitter.listenerCount("error")); // 1
