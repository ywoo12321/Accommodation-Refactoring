const searchData = [
  {
    lodging_id: 0,
    lodging_name: "oh세화",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/060/347/original/065b7bddacf3ae0e87c850c6fa8dada9d201228a.jpg?1608275026",
  },
  {
    lodging_id: 4,
    lodging_name: "고등어민박",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/022/464/original/2640b97be70008b4d082bb8347ddc0951d542370.jpg?1508813058",
  },
  {
    lodging_id: 5,
    lodging_name: "고산별곡",
    tag: "industrial",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/042/728/original/003c10bd922f0cf4a7fd18cc994ba34ab8436fa1.jpg?1580881418",
  },
  {
    lodging_id: 7,
    lodging_name: "공간동백",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/141/481/original/b76998e21ac94a9d3cc8912bfcbf5877d9f595b3.jpg?1663036255",
  },
  {
    lodging_id: 11,
    lodging_name: "금등첨화",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/095/586/original/2b60ca0bcf59ef212add8e55717bc79ba61341e3.jpg?1633489056",
  },
  {
    lodging_id: 13,
    lodging_name: "까사벽락재",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/030/317/original/53eaf1afc21ab9ba54ab7bf82ef337adfae3ff6e.jpg?1542161493",
  },
  {
    lodging_id: 16,
    lodging_name: "낮은제주",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/034/038/original/daf03305ea2a70a198002192616e5358ae685200.jpg?1558358285",
  },
  {
    lodging_id: 19,
    lodging_name: "노이메종",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/139/086/original/2475ccd3d33ce400ad6a100e957e8109429920de.jpg?1661743865",
  },
  {
    lodging_id: 21,
    lodging_name: "눈먼고래",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/006/565/original/bcf737228f0bfc448cfc290843a63580bc38ca97.jpg?1442163408",
  },
  {
    lodging_id: 26,
    lodging_name: "달리야드",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/075/385/original/26d97a9a5a4fe2558b327fb1c1a16a6a86382274.JPG?1623037796",
  },
  {
    lodging_id: 29,
    lodging_name: "돌채",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/037/715/original/139bb9feb23f7ba935e724cffb17115a44e006db.jpg?1567391473",
  },
  {
    lodging_id: 30,
    lodging_name: "동동스테이",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/100/806/original/2d48bbb04de8368cbedb9ef73e00654b38d14778.jpg?1637028970",
  },
  {
    lodging_id: 33,
    lodging_name: "라송",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/080/031/original/d9222732ee8a15f851114786ad9cff7bbcf2a9cd.jpg?1625044840",
  },
  {
    lodging_id: 38,
    lodging_name: "로시1978",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/120/574/original/79f2ebc0f9afa8ee7e8e4fee8a8a9e97270e111e.jpg?1651045616",
  },
  {
    lodging_id: 40,
    lodging_name: "류월",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/149/076/original/d1fab5d4a8cdfa36719fac55c6ca9a287e53c256.jpeg?1666612014",
  },
  {
    lodging_id: 41,
    lodging_name: "리아드",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/132/371/original/dd652fe2d20806b225a288499f08f1893f139e29.jpg?1658399763",
  },
  {
    lodging_id: 43,
    lodging_name: "마 메종",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/120/363/original/d96004459bdc2bf3c85e454c4d92653cb93bed2f.jpg?1651039663",
  },
  {
    lodging_id: 44,
    lodging_name: "마미홈",
    tag: "classic",
    address: "제주 ",
    lodging_img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlLFavvINLPx4hKNIrqcnrkPMRZYWkLUSQ&amp;usqp=CAU"',
  },
  {
    lodging_id: 45,
    lodging_name: "말로나 스테이",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/116/223/original/cec07a1943533e95540b729cb344069cecc61440.jpg?1647566392",
  },
  {
    lodging_id: 46,
    lodging_name: "멜로우멘션",
    tag: "popart",
    address: "인천 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/117/502/original/dacd8071ca5393a66acec86df6db9aa3278b1268.jpg?1648778545",
  },
  {
    lodging_id: 49,
    lodging_name: "모노가든",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/026/243/original/3b27ac6b5f3a3e23460a047289deb987d0b25f48.jpg?1523607721",
  },
  {
    lodging_id: 53,
    lodging_name: "문워크",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/024/091/original/7b796d02fa423532a990a7ea6f7809d65181dcbf.jpg?1513164569",
  },
  {
    lodging_id: 56,
    lodging_name: "밤편지",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/098/957/original/413c431d2ae1246a3770a5d5125f426d22d4521e.jpg?1635304588",
  },
  {
    lodging_id: 57,
    lodging_name: "밭담집",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/132/690/original/0e7628312f71f0d7f38883d31eda56625ebe994a.jpg?1658714144",
  },
  {
    lodging_id: 59,
    lodging_name: "벵디1967",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/024/473/original/695aa10f0f06d7fd4155fa1b6bf963ed8b0ac315.jpg?1514365752",
  },
  {
    lodging_id: 61,
    lodging_name: "별아도",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/054/474/original/fd412741b367abf6083819cd66a7df46649cf76e.jpg?1600831634",
  },
  {
    lodging_id: 62,
    lodging_name: "봄달리",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/122/932/original/9c7ff911e5613a87ec789a1c6aec147845864f69.jpg?1652775996",
  },
  {
    lodging_id: 64,
    lodging_name: "북촌리멤버",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/034/764/original/7e34b81403e9833f49103e818bbbb995c39c0539.jpg?1560676223",
  },
  {
    lodging_id: 65,
    lodging_name: "브리드인제주(요가민박)",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/023/746/original/732dc663f1b6117f421a544c585f749f206e3a38.jpg?1512381792",
  },
  {
    lodging_id: 68,
    lodging_name: "빈도롱이",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/139/424/original/2d319bfb32274417c02846c0e984437fd1f01a05.jpg?1662000074",
  },
  {
    lodging_id: 69,
    lodging_name: "빈티지제주",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/040/775/original/d21ed8026ac9b14d9deae5d9e81d0a9db252fd7e.jpg?1577333255",
  },
  {
    lodging_id: 72,
    lodging_name: "새록",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/128/927/original/b48ca1f0b4c39f0a347087890a3c4122a2768b5e.jpg?1657005347",
  },
  {
    lodging_id: 75,
    lodging_name: "서귀맨션",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/094/597/original/ec91cd3d67a85ee45e500ddddbe9b6f0f5ba2e0d.jpg?1632903075",
  },
  {
    lodging_id: 76,
    lodging_name: "서리어",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/131/810/original/0bec048f97090b5acb398318153c83844d08de93.jpg?1658291243",
  },
  {
    lodging_id: 77,
    lodging_name: "서우주",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/109/739/original/1f98a54d3bc852b5b78c94ccb1d055020ab55ea6.jpg?1642052122",
  },
  {
    lodging_id: 80,
    lodging_name: "서화우도",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/087/313/original/a7330432a285d4e6d0833bdf3d3192ff213db62c.jpg?1628473113",
  },
  {
    lodging_id: 81,
    lodging_name: "선흘림",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/103/385/original/d9da99331f6390c12e8010f62a2fa19641db5432.jpg?1638760373",
  },
  {
    lodging_id: 83,
    lodging_name: "섭재",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/128/850/original/eb4c3417b3ed50b6501e641ecb919b03010d64b2.jpg?1656999853",
  },
  {
    lodging_id: 85,
    lodging_name: "소요소림",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/056/267/original/8fc467cd08a9fd2be30490a072a3c513e051d2ef.jpg?1603072548",
  },
  {
    lodging_id: 86,
    lodging_name: "송당일상",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/025/978/original/7f85722ec22466110601912e6724074e8c43459d.jpg?1523098545",
  },
  {
    lodging_id: 90,
    lodging_name: "스테이 나음",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/134/289/original/67e19b9509243da847185ea6a3a2e507da25e572.jpg?1659580048",
  },
  {
    lodging_id: 95,
    lodging_name: "스테이 수망일기",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/073/665/original/325b1ed451261991e746897ab2648bc1624cc945.jpg?1622021939",
  },
  {
    lodging_id: 97,
    lodging_name: "스테이 아린",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/123/681/original/8cb1ca48825393633e266efbabc768de8c45873f.jpg?1653283297",
  },
  {
    lodging_id: 100,
    lodging_name: "스테이1미터",
    tag: "industrial",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/030/581/original/32a5e51980528b7549ac4537ba820a814a05382a.jpg?1543555596",
  },
  {
    lodging_id: 102,
    lodging_name: "스테이렌토",
    tag: "industrial",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/027/491/original/7772596f67556c65fcdbeb5a146d1555e9438e1c.jpg?1529040126",
  },
  {
    lodging_id: 107,
    lodging_name: "스테이소도",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/029/418/original/350cc26fe7c35127a2ab7e09ce28fa577c6cf4d9.jpg?1539159716",
  },
  {
    lodging_id: 108,
    lodging_name: "스테이여백",
    tag: "modern",
    address: "인천 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/092/549/original/4d20e8f3d9412d04d8b8d0c1c72c62d01a2d9b61.jpg?1631511022",
  },
  {
    lodging_id: 120,
    lodging_name: "신돌집",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/114/666/original/42ff3ed406f61de7073d23e837abd8b05664f2cf.jpg?1645581609",
  },
  {
    lodging_id: 128,
    lodging_name: "어오내스테이",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/073/425/original/ee3c62f350ec28fced1746e392ffe98a0625570b.jpeg?1621952681",
  },
  {
    lodging_id: 129,
    lodging_name: "어쿠스틱맨션",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/034/521/original/2e34b3cf856dde47f4be5caae327efe7ab0a69b0.jpg?1559725536",
  },
  {
    lodging_id: 131,
    lodging_name: "에디토리얼 제주",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/017/454/original/e662dba3538ede67e0db5671e269e596b164aa6b.jpg?1500019827",
  },
  {
    lodging_id: 132,
    lodging_name: "에이 쉘 인 제주",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/072/714/original/ca79c9e5c8169527ad18226be61534ce1c4900bb.jpg?1621745323",
  },
  {
    lodging_id: 133,
    lodging_name: "에프터스쿨",
    tag: "popart",
    address: "제주 ",
    lodging_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4skY4TAQVjp7M-kT7azEUQNULmUgcjYbRYg&amp;usqp=CAU",
  },
  {
    lodging_id: 134,
    lodging_name: "엔틱스",
    tag: "classic",
    address: "제주 ",
    lodging_img: "https://blog.kakaocdn.net/dn/ZqVHI/btrscNM6qpA/iCQkjeKDEAmck3vhKrzzB1/img.jpg",
  },
  {
    lodging_id: 143,
    lodging_name: "온휴가",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/131/375/original/9582ce73b539784b069d12c60f5005772fea7265.jpg?1658197419",
  },
  {
    lodging_id: 146,
    lodging_name: "우주오리",
    tag: "industrial",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/111/565/original/5beda53be181bd3a5b623f0a432329ab0dba29d8.jpg?1642983238",
  },
  {
    lodging_id: 147,
    lodging_name: "월령선인장",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/013/965/original/5fca8f6b275bd82c9da9d6933345b78fcfb4517c.jpg?1481682808",
  },
  {
    lodging_id: 155,
    lodging_name: "이꼬이&스테이",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/121/077/original/5f75b19482145b5464b2a3f14327f19681dbbe7f.jpg?1651562423",
  },
  {
    lodging_id: 159,
    lodging_name: "일리스테이",
    tag: "modern",
    address: "인천 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/052/526/original/5627b02f003cc05e304c0e96787706cd0dbe2262.jpg?1597198141",
  },
  {
    lodging_id: 161,
    lodging_name: "일상초대",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/092/025/original/bfb20d64844593c2d8ef162c7f9117cf96d682e6.jpg?1630997581",
  },
  {
    lodging_id: 162,
    lodging_name: "일상호사",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/035/379/original/442e113fccd0ffede470161ca5521bc076660333.jpg?1562510287",
  },
  {
    lodging_id: 163,
    lodging_name: "일일시호",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/081/010/original/8d63fb673855442c5adfa1df5d312bd8f1ac4670.jpg?1625635351",
  },
  {
    lodging_id: 164,
    lodging_name: "임진고택",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/048/592/original/e9da6b7e34a723c31f9558666d4eafaaf2c9959c.jpg?1591838936",
  },
  {
    lodging_id: 166,
    lodging_name: "잔월",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/095/955/original/6d91fbb84e619450ae84f61bc18a3ded5e4a5487.jpg?1633584414",
  },
  {
    lodging_id: 167,
    lodging_name: "저지맨션",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/129/686/original/68e7a1c6495cb555ac48f5e161ee9ad905992ce9.jpg?1657331992",
  },
  {
    lodging_id: 169,
    lodging_name: "제주 무이",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/052/241/original/3f8beb83504b7cdb1dad19010082462fe183c4eb.jpg?1597042625",
  },
  {
    lodging_id: 170,
    lodging_name: "제주스테이 비우다",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/062/024/original/ef3c52c8dac8c09c1fa832cb18275195e352ff13.jpg?1611199083",
  },
  {
    lodging_id: 173,
    lodging_name: "청수리아파트",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/017/353/original/e47a78e6f6926b326ef7ea6171b62e807a84a802.jpg?1500002727",
  },
  {
    lodging_id: 177,
    lodging_name: "코다",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/125/208/original/e4fb568ee6f4909cde866f607a4b729d655ee19a.jpg?1654584148",
  },
  {
    lodging_id: 178,
    lodging_name: "코코로 오보에",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/138/994/original/fbf850b792f249657d069b16ceeb9e47aaa6c0f4.jpg?1661737863",
  },
  {
    lodging_id: 179,
    lodging_name: "크로베",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/038/290/original/e164491f93172378a613b5e8e626922b7b8d71c0.jpg?1569545533",
  },
  {
    lodging_id: 181,
    lodging_name: "클랭블루스테이",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/076/505/original/1ebf17f8134e7620d35251e01c26eba859b7433f.jpg?1623224294",
  },
  {
    lodging_id: 182,
    lodging_name: "토리코티지X하시시박",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/109/582/original/f00089220eb2b1e7e3a96dcbd3b75a4678a08d2c.jpg?1641954473",
  },
  {
    lodging_id: 183,
    lodging_name: "파이프하우스",
    tag: "industrial",
    address: "제주 ",
    lodging_img: "https://t1.daumcdn.net/cfile/tistory/998651365EA65B0921",
  },
  {
    lodging_id: 187,
    lodging_name: "평대파노라마",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/008/858/original/ba8e1611e1328aaf224062824d94107ac2043cab.jpg?1457002225",
  },
  {
    lodging_id: 188,
    lodging_name: "풀벗 아그리투리스모",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/035/103/original/7b32034ebcc961dbc329793517fa9f735c33feeb.jpg?1562149815",
  },
  {
    lodging_id: 190,
    lodging_name: "프로 스테이",
    tag: "provence",
    address: "제주 ",
    lodging_img: "https://t1.daumcdn.net/cfile/tistory/260A9E4850EA6A7A0E",
  },
  {
    lodging_id: 191,
    lodging_name: "프로맨션",
    tag: "provence",
    address: "제주 ",
    lodging_img:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjRfMTc0/MDAxNTU2MTA4MDQzNzg0.Y0oTSRNafC5ehUUR2WBC1AGqz1rW8lAJ1Ilf_Ucsfxsg.QP9t8iwDeIvUJ1a8aGjLvTXXagdAan7tiw-O_lT87a4g.PNG.courage0430/사진2.png?type=w800",
  },
  {
    lodging_id: 193,
    lodging_name: "하다책숙소",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/037/109/original/f12bbf92fa531263afd311c62241acac96cb5b40.jpg?1565584428",
  },
  {
    lodging_id: 194,
    lodging_name: "하도기록",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/098/099/original/a0922005edafdfd5fb1ba7ff301e3ad42b49a90f.jpg?1634708224",
  },
  {
    lodging_id: 195,
    lodging_name: "하도하도1929",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/029/963/original/d91f31b15b351f89bf4cf8a321df129f298625a2.jpg?1541321742",
  },
  {
    lodging_id: 196,
    lodging_name: "하루나의 뜰",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/135/764/original/5d45eb64c3ad32d9d686c9c47eeda97d500455e8.jpg?1660619555",
  },
  {
    lodging_id: 197,
    lodging_name: "하루앤하루",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/034/473/original/185e91955f5f75851326d2f4ec7cabcff2d50303.jpg?1559654618",
  },
  {
    lodging_id: 201,
    lodging_name: "한원소담",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/063/224/original/08c9a282ee08214b60d09716cd2d626fb1429f37.jpg?1613457020",
  },
  {
    lodging_id: 203,
    lodging_name: "헤이블루",
    tag: "popart",
    address: "제주 ",
    lodging_img: "https://t1.daumcdn.net/cfile/tistory/26066444564E7CF71A",
  },
  {
    lodging_id: 204,
    lodging_name: "호근머들",
    tag: "modern",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/130/063/original/03c6df40c03eef69f52074c181db5eff215c8eec.jpg?1657590034",
  },
  {
    lodging_id: 205,
    lodging_name: "호근모루",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/111/694/original/9457a1c1ff3ea9a058de1d803e97852df234f786.jpg?1643099254",
  },
  {
    lodging_id: 208,
    lodging_name: "화우재",
    tag: "natural",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/039/864/original/2d5949adb592f0e4463e4767b85f967dca73a56a.JPG?1574413758",
  },
  {
    lodging_id: 210,
    lodging_name: "휘연재",
    tag: "asia",
    address: "제주 ",
    lodging_img:
      "https://images.stayfolio.com/system/pictures/images/000/136/722/original/07eee093ff475e5136ac5f079b321ed38ac80682.jpg?1660789416",
  },
];
export default searchData;
