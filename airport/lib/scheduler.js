const SCHEDULE_TIME = 600000;

module.exports = class Scheduler {
  constructor(schedules) {
    this.schedules = schedules || [];
  }

  CouldScheduleAt(time) {
    if (this.schedules[this.schedules.length - 1] + SCHEDULE_TIME < time) {
      return true;
    }
  }

  ScheduleAt(time) {
    this.schedules.push(time);
    return true;
  }

  Schedule() {
    let time = Date.now();

    if (!this.CouldScheduleAt(time)) {
      time = this.schedules[this.schedules.length - 1] + SCHEDULE_TIME;
    }

    this.ScheduleAt(time);

    return time;
  }

  UnscheduleAt(time) {
    this.schedules = this.schedules.filter(function(schedule) {
      if (schedule !== time) {
        return true;
      }
    });
  }
};
