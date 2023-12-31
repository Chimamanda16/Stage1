const express = require("express");
const app = express();

app.get("/api", (req, res)=>{
   
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    if (!slack_name || !track) {
        return res.status(400).json({ error: 'Include both slack_name and track' });
    }

    const date = new Date();
    const current_day = date.toLocaleDateString(undefined, { weekday: 'long' });
    const utc_time = date.toISOString().slice(0, 19) + 'Z';
    const github_file_url = "https://github.com/Chimamanda16/Stage1/blob/main/app.js";
    const github_repo_url = "https://github.com/Chimamanda16/Stage1.git";


    const response_data = {
        slack_name: slack_name,
        current_day: current_day,
        utc_time: utc_time,
        track: track,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: 200,
    };

    res.json(response_data);
});


app.listen(3000, ()=>{
    console.log("Server has started on port 3000");
});