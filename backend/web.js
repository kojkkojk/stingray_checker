const express = require("express");
const app = express();
const http = require('http').createServer(app);
const axios = require('axios');
const port = 5000;
const basic_infos = require("./configs/basic_configs");
const apiKey = basic_infos.apiKey;
const BASE_URL = basic_infos.BASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/charlist', async (req, res) => {
   let charNames = req.query.charname;
   let enCode = encodeURI(charNames);
   try {
      const response = await axios.get(`${BASE_URL}/servers/all/characters?characterName=${enCode}&limit=100&wordType=match&apikey=${apiKey}`);
      const data = response.data;
      res.send(data);
   } catch (error) {
      console.error(error); // 콘솔에 오류 출력
      res.status(500).json({ error: '서버에서 데이터를 가져오는 데 문제가 발생했습니다.' });
   }
});

app.get('/api/chardata', async (req, res) => {
   let charINFO = req.query;
   let infos = {
      "multSearch": {}
   }
   try {
      const urls = [
         `${BASE_URL}/servers/${charINFO.serverID}/characters/${charINFO.charUID}/status?apikey=${apiKey}`,
         `${BASE_URL}/servers/${charINFO.serverID}/characters/${charINFO.charUID}/equip/equipment?apikey=${apiKey}`,
         `${BASE_URL}/servers/${charINFO.serverID}/characters/${charINFO.charUID}/equip/creature?apikey=${apiKey}`,
         `${BASE_URL}/servers/${charINFO.serverID}/characters/${charINFO.charUID}/equip/avatar?apikey=${apiKey}`,
         `${BASE_URL}/servers/${charINFO.serverID}/characters/${charINFO.charUID}/skill/buff/equip/equipment?apikey=${apiKey}`,
      ];
      await Promise.all([
         axios.get(urls[0]).then(res => {
            infos.jobGrowName = res.data.jobGrowName
            infos.critical = [res.data.status[10], res.data.status[11]]
         }),
         axios.get(urls[1]).then(res => {
            infos.equips = [res.data.equipment[3].enchant.explain, res.data.equipment[6].enchant.explain]
            infos.multSearch["칭호"] = res.data.equipment[1].itemId
         }),
         axios.get(urls[2]).then(res => infos.multSearch["크리쳐"] = res.data.creature.itemId),
         axios.get(urls[3]).then(res => infos.multSearch["아바타"] = res.data.avatar[9].itemId),
         axios.get(urls[4]).then(res => infos.buffSkill = res.data.skill.buff.skillInfo.option.level),
      ]).then(() => {
         axios.get(`${BASE_URL}/multi/items?itemIds=${infos.multSearch["칭호"]},${infos.multSearch["크리쳐"]},${infos.multSearch["아바타"]}&apikey=${apiKey}`).then(res1 => {
            infos.naOhChing = {
               "칭호": res1.data.rows[0].itemStatus[0],
               "크리처": res1.data.rows[1].itemStatus[0],
               "오라": res1.data.rows[2].itemStatus[0]
            }
            res.send(infos);
         })
      })
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
   }
});

http.listen(port, () => {
   console.log("Listen on port : " + port);
})