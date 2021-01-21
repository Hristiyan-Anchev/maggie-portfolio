module.exports =
    function() {
            const mongoose = require("mongoose");
            const uname =
                encodeURIComponent(process.env.DB_USER)
            ;
            const passwd =
                encodeURIComponent(process.env.DB_PASSWD)
            ;


        mongoose.connect(process.env.DB_HOST, {
            // "auth": { "authSource": "portfolio_db" },
            "user": uname,
            "pass": passwd

        });

            const db = mongoose.connection;

            db.on("error", console.error.bind(console, "connection error :: "));
            db.once("open", function () {
                console.log("** DB Connection open on - localhost:27017/backend_server **");
            });
    }





