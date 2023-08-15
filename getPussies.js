const inscriptions = [
  { "number": 980146, "id": "3c06ec8c0b55080dfa79664ab98579183a0efc7e4caca1dc7afe5fb1e5ae95fei0" },
  { "number": 980142, "id": "c3d4758814285b61d53ce884d38b37c9df2a90ff127eb517d0a332b276ac2ef6i0" },
  { "number": 980141, "id": "b69ef2170d40f665d571f735d26d938c338027bfc91e6b98b92fdf3639f6fbf5i0" },
  { "number": 980136, "id": "4874a6f86d4d8b22950a63cb4f2bf219538f6def7c084600d8122ff740c0f2f0i0" },
  { "number": 980132, "id": "6c7aaa9ad477d4f0401c9b179a6faecd430a810abd667fdc9661bb820747b6e9i0" },
  { "number": 980130, "id": "e40b6da9cc70e9decb4ede81adaa078aeb24d1477d0a73568796cf5c9e7cdfe8i0" },
  { "number": 980129, "id": "b4001ec931d635abba66a93455c49fdd815932ce32f8f7ba622248f2e48989e7i0" },
  { "number": 980128, "id": "be1afd89823ea33ba71f4d301ab50aa7984b2fe67103e00a02f8558fefa3a8e6i0" },
  { "number": 980127, "id": "0a37e74c5cbb04cdfee1f9283462c71baae0e4e87d5884d805cbc6a6bf732ce3i0" },
  { "number": 980126, "id": "c5abe49c2f6636cfa59b51db747ce1e6122f42be739e6dae861e1fe60db5f1e1i0" },
  { "number": 980125, "id": "5444403e98ad3dfc9b3e9308987ea5af14ce0738b82f0a76189accbe4d01aae1i0" },
  { "number": 980123, "id": "c247fd0cccdc303d95253ba39f8ad40fadb8550bdcb2f3d77327f34d1e2a67dei0" },
  { "number": 980122, "id": "e4febe0ec7d12a85e411db01f997ffe69db808db305e98252ba5d6fc807061ddi0" },
  { "number": 980121, "id": "28b6a38e0ad4492f8b9e78889b94b125dbd8235877b635eaa029ed936f6235ddi0" },
  { "number": 980120, "id": "1d2b9ff437510c9ecf1d56f087b6b1934380db09d7c9a41012fde3f2eed8dddci0" },
  { "number": 980119, "id": "ff7455b64bce5aa6cf94b81d16cfe751b32076809ff31de83c68e23fb4a62bdci0" },
  { "number": 980118, "id": "abc1cee47945bdf8f94693577b7302143747f3227610e9afef2afbb535b7cdd6i0" },
  { "number": 980117, "id": "8bdad49d2f683b1cccdc8b7e4626178ff9488504c22e298a54ec21bab4f61bd5i0" },
  { "number": 980114, "id": "a5ef801bebc72a6d2de7cc2af95c0039321e574739d3c2730bb2b8010022f4d0i0" },
  { "number": 980110, "id": "9ae502ef28eedaaef9685645459c45f745ff65b7e81825024fb5c2387f9be4cai0" },
  { "number": 980108, "id": "b6167a551fc42235590f70a31269f562dd43add3b01e82d83a42a748b36997c6i0" },
  { "number": 980103, "id": "caaeaa7446463cd3a2169e751c283b5d7157ac34c5a2597744c332d6f501c0bei0" },
  { "number": 980101, "id": "e13b455758545842a9f0c682a99c8858a20727b818af169465dca897559840bci0" },
  { "number": 980098, "id": "9a962b269d141948727805d5b7d3e57f26d4979429d23ef9ed79a85cbd6a79bbi0" },
  { "number": 980097, "id": "784ffb67e728b6efd7eee1bc57c11a4d3369a622609213c9b3dc332bba30efb9i0" },
  { "number": 980096, "id": "50fe1bb50e33e21c4ee94a340fa89cedef0d9a3d8735c84e5f383bdd8c73a8b9i0" },
  { "number": 980093, "id": "4223ed21088cca946be01b19e50f58e591f980cad33cdd91b9a8af165add10b1i0" },
  { "number": 980085, "id": "a312105279b1da1c99d2c659696c5f32106c0230244bee6718cd7cff21d512a5i0" },
  { "number": 980082, "id": "6cd2ec34aeedae7a6aeb9c161ac5072b0cd815687314d21b421cc23049de89a2i0" },
  { "number": 980074, "id": "84b43ee35d5cd0e944239f0a034215b1e46835b50934c48a758bcc511bafac97i0" },
  { "number": 980073, "id": "dc562726e878d4bcb924afc6272eddf92639c4f59dc2003fe8f854005ce9a397i0" },
  { "number": 980071, "id": "b6f9f1ba36ec7ff6ca5be67164d6f9da8b272d5b3548640598d6d7a43ed75e95i0" },
  { "number": 980070, "id": "a8b09d1e760667aa69b5485c3c1a344ba59af365afd3914faacb84267551928ei0" },
  { "number": 980069, "id": "9b817fc618278f3d985e8301c57ae9ce99a87a7fb33772182a4239888bab4789i0" },
  { "number": 980068, "id": "035226555006cdb1aa417d119ba90b78646744fde4e1f9010ea039d65bbad488i0" },
  { "number": 980065, "id": "db44899a85eca2c761121d71bfb057ba2d97c1a42b021d4e7ef5db99225e2c80i0" },
  { "number": 980062, "id": "26397a18ef31df33654a303956cbcbb002f2f0dac4a987dff0f62fa25d8f857ai0" },
  { "number": 980058, "id": "61b695c552d034fcab81a14dd15e21b5af6db3b88897e97f6edc7243e83c7171i0" },
  { "number": 980056, "id": "d7365bd0a814b0880b31f277338d1fa510febf2153eb865df92720c07e2c9c6di0" },
  { "number": 980051, "id": "ee44c6e47fa62489dfbee0abca5cc5db87b3ff192d8fe488011e554e1c7c7069i0" },
  { "number": 980050, "id": "e08f87561e56d2ea647407506ba61497884e0f830e722717a04dfead58989a64i0" },
  { "number": 980046, "id": "910cf995e8d84237f7998ab6634cd80cbea495070ca3e401d6fe85ee11d48655i0" },
  { "number": 980045, "id": "b3bc3d30e9f17b929ed506befd5482e0776ba05c63a8b2da40e53af6d3c08553i0" },
  { "number": 980043, "id": "810146024f1cdd0a155d821fe130f6a79f2b59491ce6df3ad06251c37f1e1a51i0" },
  { "number": 980037, "id": "f36699bf29806bac8ff6843e96a8e25996a767205044eb41d1c7a3497a882743i0" },
  { "number": 980035, "id": "d54574bb3b1be69a572d0c01fe72cdb28d5a65718fc5b4046a757cc0091ffa40i0" },
  { "number": 980029, "id": "283a667102c47921c508b568537861b4d8a1443794ab815ff40b110ea6565c3ci0" },
  { "number": 980027, "id": "5792053f4de0e2de3279aa7601d7a0b755c18aca1371fb29c703082f5a6cc938i0" },
  { "number": 980025, "id": "9fc6f0150463c5f92a2fe7842b0e9e8fc362fcd92881e3de3b6f778114b99633i0" },
  { "number": 980022, "id": "7fbf4c021d882a89fae2c3f36e3b59ee75c384a05f163ef5729e405d0891842ei0" },
  { "number": 980021, "id": "518141b084529dfe5e4b65339c19a247a18c20904a36a138b55be82a61b6552bi0" },
  { "number": 980018, "id": "752fd7484b2de4b92083419badd6e58e8ddad71026c712445e50cfd89d8d4123i0" },
  { "number": 980017, "id": "43a797fbc552fd837d283ae52f5662c5f0a0fe9adbe3f10ec14a446394b58a22i0" },
  { "number": 980014, "id": "9eda1fdd73873fc688b150dd9f6f147df764ac65a2a94cb2eb22806845b66519i0" },
  { "number": 980010, "id": "e1a0a24788bb7b745167044d39c4ab5602bfd8a9fcab9dfadd296d6ed7688f15i0" },
  { "number": 980008, "id": "bb8d41049e429f8825987c87f0c7613f748f9502c3844d7cbcb0d838d033fd11i0" },
  { "number": 980007, "id": "d253c3c1360ff352385a31f184108d8ec74c8d8564777fe1808b8e71d4f12911i0" },
  { "number": 980006, "id": "78ab1ffaadeb42166a6b74f62d435f27862722197ca506f8d043ac56dd670011i0" },
  { "number": 980005, "id": "a4d9ec6eb8339e9bec2cb137e49ecef2105b9a533856a97c7bc1f60418a5e90di0" },
  { "number": 980004, "id": "6d2552d9bac9885a27ebbced5a1b6fbc5c8060b159a38f8d9694a1f08e28dc0di0" },
  { "number": 980003, "id": "5df5b4474822eec23e4250e16085805fe0981d071f4216f2b37010d1d9803d0di0" },
  { "number": 980002, "id": "8e289b875d94e2d58b634aabfd215c1f7c00af0c8f546931d5491a2f7f72d90ci0" },
  { "number": 980000, "id": "9b636fa9ce0ed17b1a1971798c42de98f62b9c3257eb09ceabb0bd35558c5308i0" },
  { "number": 979997, "id": "cf2cfabe52caeb5c8d5feafe60d1bc15b378d354f88c43b8aa6f73e5ae524306i0" },
  { "number": 979995, "id": "1a0f505f3634b5ccb55704b49bbc414b467928c38202a47f5348475efe21fc05i0" },
  { "number": 979993, "id": "ab6c46f80628ebfc69742d0c9f9ea0d63b55135e40b495d3bed53643e1864b03i0" },
  { "number": 979992, "id": "87c3ef0c162ea90339a921ccc1fe2891b9e74d573adc6e06c03213efb75b2b01i0" },
  { "number": 979985, "id": "fa82f0faba10dddbb2087f0a4fd8a3575b9732a89a9473bd9f66cf37890b8e49i0" },
  { "number": 979624, "id": "5760103b969d3100c2fda0be5e95206b1cfdcb033d1d259713f53900d9fa7d2ai0" }
];

var pussiesWithAttitudes = [];
  
function downloadAndStore(url, number) {
  const data = localStorage.getItem(number)
  if (data){
      return
  }
  fetch(url)
    .then(response => response.text())
    .then(content => {
      localStorage.setItem(number, content);
      console.log(`File content for number ${number} stored in localStorage.`);
    })
    .catch(error => {
      console.error('Error downloading or storing file content:', error);
    });
}

function parseTraits(svgContent) {
  const traitsRegex = /<desc xmlns:meow="https:\/\/bitcoinpussies.com\/">\s*<meow:traits>([\s\S]*?)<\/meow:traits>\s*<\/desc>/;
  const titleRegex = /<title>(.*?)<\/title>/;

  const traitsMatch = svgContent.match(traitsRegex);
  const titleMatch = svgContent.match(titleRegex);

  if (!traitsMatch || !titleMatch) {
    console.error('Title or meow:traits not found in SVG.');
    return null;
  }

  const traitsText = traitsMatch[1];
  const title = titleMatch[1];

  const traitsJson = {};
  const traitRegex = /<meow:([^>]+)>(.*?)<\/meow:\1>/g;
  let traitMatch;

  while ((traitMatch = traitRegex.exec(traitsText)) !== null) {
    traitsJson[traitMatch[1].toLowerCase()] = traitMatch[2];
  }

  return { number: title.slice(title.lastIndexOf('#') + 1), traits: traitsJson };
}

function init(){

  // Rescuing pussies
  inscriptions.forEach(inscription => {
    const url = `https://ordinals.com/content/${inscription.id}`;
    const number = inscription.number;
    downloadAndStore(url, number);
  });

  // Get pussies from localStorage and parse them
  inscriptions.forEach(inscription => {
    const svgContent = localStorage.getItem(inscription.number);
    if (svgContent) {
      const traitsJson = parseTraits(svgContent);
      if (traitsJson) {
        var isShiny = traitsJson.traits.skin.includes('Shiny');
        var cat = { "number": inscription.number, "id": inscription.id, "meta": traitsJson, "svg": svgContent, "isShiny": isShiny };
        pussiesWithAttitudes.push(cat);
      }
    }
  });

  console.log(pussiesWithAttitudes);
  return pussiesWithAttitudes;
}