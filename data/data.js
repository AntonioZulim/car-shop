const data = {
  "website": "Vehicles",
  "categories": [
    {
      "name": "Ev",
      "image": "/images/ev/ev.jpg",
      "products": [
        { "id": "1", "name": "Hyundai Ioniq 5", "image": "/images/ev/hyundai_ioniq_5.jpg" },
        { "id": "2", "name": "Hyundai Kona Electro", "image": "/images/ev/hyundai_kona_electro.jpg" },
        { "id": "3", "name": "Mercedes Benz EQC 400", "image": "/images/ev/mercedes-benz_eqc_400.jpg" },
        { "id": "4", "name": "Rimac Nevera", "image": "/images/ev/rimac_nevera.jpg" },
        { "id": "5", "name": "Tesla Model 3", "image": "/images/ev/tesla_model_3.jpg" }
      ]
    },
    {
      "name": "Executive",
      "image": "/images/executive/executive.jpg",
      "products": [
        { "id": "6", "name": "Audi A6", "image": "/images/executive/audi_a6.jpg" },
        { "id": "7", "name": "Audi A7", "image": "/images/executive/audi_a7.jpg" },
        { "id": "8", "name": "BMW 5 Series", "image": "/images/executive/bmw_5_series.jpg" },
        { "id": "9", "name": "Mercedes Benz E300", "image": "/images/executive/mercedes-benz_e300.jpg" },
        { "id": "10", "name": "Volvo S90", "image": "/images/executive/volvo_s90.jpg" }
      ]
    },
    {
      "name": "Large",
      "image": "/images/large/large.jpg",
      "products": [
        { "id": "11", "name": "Audi A5", "image": "/images/large/audi_a5.jpg" },
        { "id": "12", "name": "BMW 3 Series", "image": "/images/large/bmw_3_series.jpg" },
        { "id": "13", "name": "Kia K5", "image": "/images/large/kia_k5.jpg" },
        { "id": "14", "name": "Skoda Superb", "image": "/images/large/skoda_superb.jpg" },
        { "id": "15", "name": "VW Passat", "image": "/images/large/vw_passat.jpg" }
      ]
    },
    {
      "name": "Medium",
      "image": "/images/medium/medium.jpg",
      "products": [
        { "id": "16", "name": "Audi A3", "image": "/images/medium/audi_a3.jpg" },
        { "id": "17", "name": "Ford Focus", "image": "/images/medium/ford_focus.jpg" },
        { "id": "18", "name": "Kia Ceed", "image": "/images/medium/kia_ceed.jpg" },
        { "id": "19", "name": "Peugeot 308", "image": "/images/medium/peugeot_308.jpg" },
        { "id": "20", "name": "Škoda Octavia", "image": "/images/medium/skoda_octavia.jpg" },
        { "id": "21", "name": "Toyota Corolla", "image": "/images/medium/toyota_corolla.jpg" },
        { "id": "22", "name": "VW Golf", "image": "/images/medium/vw_golf.jpg" }
      ]
    },
    {
      "name": "Miniature",
      "image": "/images/miniature/miniature.jpg",
      "products": [
        { "id": "23", "name": "Citroen C1", "image": "/images/miniature/citroen_c1.jpg" },
        { "id": "24", "name": "Hyundai Eon", "image": "/images/miniature/hyundai_eon.jpg" },
        { "id": "25", "name": "Kia Picanto", "image": "/images/miniature/kia_picanto.jpg" },
        { "id": "26", "name": "Renault Twingo", "image": "/images/miniature/renault_twingo.jpg" },
        { "id": "27", "name": "Smart Fortwo", "image": "/images/miniature/smart_fortwo.jpg" }
      ]
    },
    {
      "name": "Motorbike",
      "image": "/images/motorbike/motorbike.jpg",
      "products": [
        { "id": "28", "name": "BMW K1200s", "image": "/images/motorbike/bmw_k1200s.jpg" },
        { "id": "29", "name": "Kawasaki Ninja", "image": "/images/motorbike/kawasaki_ninja.jpg" },
        { "id": "30", "name": "Piaggio Vespa ET", "image": "/images/motorbike/piaggio_vespa_et.jpg" },
        { "id": "31", "name": "Piaggio Vespa PX", "image": "/images/motorbike/piaggio_vespa_px.jpg" },
        { "id": "32", "name": "Suzuki Gixxer SF", "image": "/images/motorbike/suzuki_gixxer_sf.jpg" }
      ]
    },
    {
      "name": "Oldtimer",
      "image": "/images/oldtimer/oldtimer.jpg",
      "products": [
        { "id": "33", "name": "BMW E30", "image": "/images/oldtimer/bmw_e30.jpg" },
        { "id": "34", "name": "Ford Mustang", "image": "/images/oldtimer/ford_mustang.jpg" },
        { "id": "35", "name": "Mercedes Benz C-Class", "image": "/images/oldtimer/mercedes-benz_c-class.jpg" },
        { "id": "36", "name": "Renault R4", "image": "/images/oldtimer/renault_r4.jpg" },
        { "id": "37", "name": "VW Beetle", "image": "/images/oldtimer/vw_beetle.jpg" }
      ]
    },
    {
      "name": "Small",
      "image": "/images/small/small.jpg",
      "products": [
        { "id": "38", "name": "Fiat Punto", "image": "/images/small/fiat_punto.jpg" },
        { "id": "39", "name": "Mini Cooper", "image": "/images/small/mini_cooper.jpg" },
        { "id": "40", "name": "Opel Corsa", "image": "/images/small/opel_corsa.jpg" },
        { "id": "41", "name": "Peugeot 208", "image": "/images/small/peugeot_208.jpg" },
        { "id": "42", "name": "Renault Clio", "image": "/images/small/renault_clio.jpg" },
        { "id": "43", "name": "Toyota Yaris", "image": "/images/small/toyota_yaris.jpg" },
        { "id": "44", "name": "VW Polo", "image": "/images/small/vw_polo.jpg" }
      ]
    },
    {
      "name": "Sports",
      "image": "/images/sports/sports.jpg",
      "products": [
        { "id": "45", "name": "Bugatti Chiron", "image": "/images/sports/bugatti_chiron.jpg" },
        { "id": "46", "name": "Ferrari SF90 Stradale", "image": "/images/sports/ferrari_SF90_stradale.jpg" },
        { "id": "47", "name": "Lamborghini Aventador", "image": "/images/sports/lamborghini_aventador.jpg" },
        { "id": "48", "name": "Pagani Huayra", "image": "/images/sports/pagani_huayra.jpg" },
        { "id": "49", "name": "Porsche Cayman", "image": "/images/sports/porsche_cayman.jpg" }
      ]
    },
    {
      "name": "Suv",
      "image": "/images/suv/suv.jpg",
      "products": [
        { "id": "50", "name": "Audi Q8", "image": "/images/suv/audi_q8.jpg" },
        { "id": "51", "name": "Hyundai Kona", "image": "/images/suv/hyundai_kona.jpg" },
        { "id": "52", "name": "Kia Stonic", "image": "/images/suv/kia_stonic.jpg" },
        { "id": "53", "name": "Opel Mokka", "image": "/images/suv/opel_mokka.jpg" },
        { "id": "54", "name": "Suzuki Vitara", "image": "/images/suv/suzuki_vitara.jpg" }
      ]
    }
  ]
};

module.exports = data;