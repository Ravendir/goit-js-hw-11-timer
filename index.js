class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      daysElem: document.querySelector(
        `${this.selector} span[data-value="days"]`
      ),
      hoursElem: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      minsElem: document.querySelector(
        `${this.selector} span[data-value="mins"]`
      ),
      secsElem: document.querySelector(
        `${this.selector} span[data-value="secs"]`
      ),
    };
  }
  changeDate() {
    const time = this.targetDate.getTime() - new Date().getTime();
    time > 0 ? this.calculateTime(time) : this.viewError();
  }
  calculateTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.renderElems(days, hours, mins, secs);
  }
  renderElems(days, hours, mins, secs) {
    this.refs.daysElem.textContent = days;
    this.refs.hoursElem.textContent = hours;
    this.refs.minsElem.textContent = mins;
    this.refs.secsElem.textContent = secs;
  }
  run() {
    this.changeDate();
    setInterval(() => {
      this.changeDate();
    }, 1000);
  }
  viewError() {
    document.querySelector(this.selector).textContant = "ТАКОВ ПУТЬ";
  }
}
const runTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 13, 2021"),
});

runTimer.run();
