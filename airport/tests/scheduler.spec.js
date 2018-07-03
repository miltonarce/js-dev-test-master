const assert = require("assert");

const Scheduler = require("../lib/scheduler");

const SCHEDULE_TIME = 600000;

describe("Scheduler", function() {
  it("will receive a list of schedules", function() {
    const scheduler = new Scheduler([1530462738546]);

    assert.deepEqual(scheduler.schedules, [1530462738546]);
  });

  it("will be an empty array if it doesn't receive a list of schedules", function() {
    const scheduler = new Scheduler();

    assert.deepEqual(scheduler.schedules, []);
  });

  describe("CouldScheduleAt", function() {
    it("will check if we can schedule at the given time", function() {
      const scheduler = new Scheduler([1530462738546]);

      assert.notEqual(scheduler.CouldScheduleAt(1530462738546 + 1), true);
    });
  });

  describe("ScheduleAt", function() {
    it("will add a new value to the schedules", function() {
      const scheduler = new Scheduler();

      assert.equal(scheduler.schedules.length, 0);
      scheduler.ScheduleAt(5);
      assert.equal(scheduler.schedules.length, 1);
    });
  });

  describe("Schedule", function() {
    it("will find the next available schedule time", function() {});
    const now = Date.now();
    const scheduler = new Scheduler([now]);
    const time = scheduler.Schedule();

    assert.equal(scheduler.schedules[1], now + SCHEDULE_TIME);
  });

  describe("UnscheduleAt", function() {
    it("Removes a specific schedule ", function() {
      const scheduler = new Scheduler([1530462738546]);

      assert.equal(scheduler.schedules.length, 1);
      scheduler.UnscheduleAt(1530462738546);
      assert.equal(scheduler.schedules.length, 0);
    });

    it("It will leave the schedules untouched if the given time is not on the list", function() {
      const scheduler = new Scheduler([1530462738546]);

      assert.equal(scheduler.schedules.length, 1);
      scheduler.UnscheduleAt(0);
      assert.equal(scheduler.schedules.length, 1);
    });
  });
});
