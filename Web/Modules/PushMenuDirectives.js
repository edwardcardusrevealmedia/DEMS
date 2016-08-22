app.directive("dwPushMenu", function ($http, recordFactory) {
    return {
        initialise: function (scope, element, attributes) {
            var self = this;

            this.initialise = function () {
                document.getElementById("menu-hamburger").addEventListener("click", self.push);
            }

            this.push = function (event) {
                event.stopPropagation();

                document.getElementById("content").classList.add("pushed", "transitioning");
                document.getElementById("push-menu-wrapper").classList.add("pushed", "transitioning");

                handleContentHeight();

                window.addEventListener("resize", handleContentHeight);

                document.getElementById("push-menu-wrapper").addEventListener("transitionend", finalisePushTransition);

                document.getElementById("menu-hamburger").removeEventListener("click", self.push);
                document.getElementById("content").addEventListener("click", self.pull);
            }

            this.pull = function (event) {
                document.getElementById("content").classList.remove("pushed");
                document.getElementById("push-menu-wrapper").classList.remove("pushed");

                document.getElementById("content").classList.add("transitioning");
                document.getElementById("push-menu-wrapper").classList.add("transitioning");

                document.getElementById("push-menu-wrapper").addEventListener("transitionend", finalisePullTransition);

                document.getElementById("content").removeEventListener("click", self.pull);
                document.getElementById("menu-hamburger").addEventListener("click", self.push);
            }

            var finalisePushTransition = function () {
                document.getElementById("content").classList.remove("transitioning");
                document.getElementById("push-menu-wrapper").classList.remove("transitioning");
                document.getElementById("push-menu-wrapper").removeEventListener("transitionend", finalisePushTransition);
            }

            var finalisePullTransition = function () {
                document.getElementById("content").classList.remove("transitioning");
                document.getElementById("push-menu-wrapper").classList.remove("transitioning");

                window.removeEventListener("resize", handleContentHeight);
                document.getElementById("content").style.removeProperty("height");

                document.getElementById("push-menu-wrapper").removeEventListener("transitionend", finalisePullTransition);
            }

            var handleContentHeight = function () {
                document.getElementById("content").style.removeProperty("height");

                if (window.getComputedStyle(document.getElementById("push-menu-wrapper")).height > window.getComputedStyle(document.getElementById("content")).height) {
                    document.getElementById("content").style.height = window.getComputedStyle(document.getElementById("push-menu-wrapper")).height;
                }
            }

            self.initialise();
        },
        replace: true,
        restrict: "E",
        scope: {
            pageSize: "@dwPageSize",
            title: "@dwTitle"
        }
    };
})