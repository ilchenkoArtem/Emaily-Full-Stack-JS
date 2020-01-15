const passport = require("passport");

module.exports = app => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {scope: ["profile", "email", "phone"]})
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google", {failureRedirect: "/login"}),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect("/surveys");
        }
    );

    api.get("/", (req, res) => {
        res.sendFile("../client/build/index.html")
    });

    app.get("/test", (req, res) => {
        res.send("Hello");
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        //res.send(req.user);
        res.redirect("/");
    });

    app.get("/api/current_user", (req, res) => {
        req.user ? res.send(req.user) : res.send("");
    });
};
