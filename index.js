"use strict";

const unreadNotificationElement = document.querySelector("h3");
const unreadNotificationIcon = document.querySelectorAll(
  ".notification-container__notification-content"
);
const markAllAsRead = document.querySelector(".mark-all-read");

markAllAsRead.addEventListener("click", function () {
  unreadNotificationIcon.forEach((e) => e.style.setProperty("--opacity", 0));
  unreadNotificationElement.style.setProperty("--opacity", 0);
});
