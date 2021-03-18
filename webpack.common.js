const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    tooltip: "./src/js/tooltip.js",
    burger: "./src/js/burger.js",
    hamburger: "./src/js/hamburger.js",
   
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-poziome.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-aluminiowe16mm.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-panelowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-panelowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-duolightMidi25.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-duolightMidi25.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-paneloweBasic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-paneloweBasic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-plisowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-plisowane20.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane50.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-plisowane50.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Coiflor.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-plisowane20Coiflor.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Vegas.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-plisowane20Vegas.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane50XLPleat.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-plisowane50XLPleat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Rippo.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-plisowane20Rippo.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzja-plisowana20.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzja-plisowana20.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzja-plisowana50.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzja-plisowana50.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome-V13.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-poziome-V13.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/kontakt.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "kontakt.html",
    }),
 
    new HtmlWebpackPlugin({
      template: "./src/pages/regulamin.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "regulamin.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/polityka-cookies.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "polityka-cookies.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/galeria-shadowplace.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "galeria-shadowplace.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/poziome-systemy.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "poziome-systemy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe25mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-aluminiowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-aluminiowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-aluminiowe50mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16Vario.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe16Vario.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16Monomagic.html",
      inject: true,
      chunks: ["index", "tooltip","hamburger"],
      filename: "zaluzje-aluminiowe16Monomagic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16IsotraHit.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe16IsotraHit.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe25mm.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25V13.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-poziome25V13.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25Vario.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-poziome25Vario.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25Monomagic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-poziome25Monomagic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25IsotraHit.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-poziome25IsotraHit.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35Diplomat.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe35Diplomat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35Basic.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe35Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50Basic.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe50Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50Retro.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-aluminiowe50Retro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25Vario.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "drewniano-bambusowe25Vario.html",
    }),
     new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25V13.html",
      inject: true, 
      chunks: ["index","hamburger","tooltip"],
      filename: "drewniano-bambusowe25V13.html",
    }),   
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "drewniano-bambusowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "drewniano-bambusowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "drewniano-bambusowe50mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35mm.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "drewniano-bambusowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35Diplomat.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "drewniano-bambusowe35Diplomat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50Basic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "drewniano-bambusowe50Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50Retro.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "drewniano-bambusowe50Retro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-mini19.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-mini19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Midi25mm.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-Midi25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-absolute.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-absolute.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-RT.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-RT.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-wolnowiszace.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety-wolnowiszace.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-kasetowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety-kasetowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-dachowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety-dachowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-kasetowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety-kasetowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Luisa.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-Luisa.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-absoluteStandard.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-absoluteStandard.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Uni19.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-Uni19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-dachoweDekolux.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-dachoweDekolux.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprenzynowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "rolety-sprenzynowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolight.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "roletyDuolight.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprezynoweSpring32.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-sprezynoweSpring32.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprenzynoweBasic25.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-sprenzynoweBasic25.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-duolightMini19.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "rolety-duolightMini19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuoligtUni19.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roletyDuoligtUni19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolightAbsolute.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roletyDuolightAbsolute.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolightRT.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roletyDuolightRT.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pionowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaluzje-pionowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pioniwe89Basic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-pioniwe89Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pioniwe127Basic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaluzje-pioniwe127Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymska.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "roleta-rzymska.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaBasic.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roleta-rzymskaBasic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaUltra.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roleta-rzymskaUltra.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaSoftline.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "roleta-rzymskaSoftline.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "karnisze.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-reczne.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "karnisze-reczne.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczne.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "karnisze-elektryczne.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-reczneKS-CS.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "karnisze-reczneKS-CS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneMovelite-Irismo.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "karnisze-elektryczneMovelite-Irismo.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneTorro.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "karnisze-elektryczneTorro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneGlydea-Ultra.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "karnisze-elektryczneGlydea-Ultra.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "ogrody-zimowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweWMU.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "ogrody-zimoweWMU.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweRoofio.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "ogrody-zimoweRoofio.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweSLS.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "ogrody-zimoweSLS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweSunshield.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "ogrody-zimoweSunshield.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "moskitiery.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "moskitiery-ramkowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "moskitiery-drzwiowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "moskitiery-plisowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe-kolnierzowe.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-ramkowe-kolnierzowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe-kolnierzowe-giete.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-ramkowe-kolnierzowe-giete.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe-standard.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-drzwiowe-standard.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe-przesuwny.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-drzwiowe-przesuwny.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane-wnekowe.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-plisowane-wnekowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane-nawierzchniowe.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-plisowane-nawierzchniowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowany-pionowy.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-rolowany-pionowy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowany-poziomy.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-rolowany-poziomy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowane.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "moskitiery-rolowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "zaslony.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-moderno.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaslony-moderno.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-flex.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaslony-flex.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-ring.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaslony-ring.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-tasma-olowek.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaslony-tasma-olowek.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-tasma-smok.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "zaslony-tasma-smok.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/maty-drewniano-bambusowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "maty-drewniano-bambusowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/maty-drewniano-bambusowe-rolowany.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "maty-drewniano-bambusowe-rolowany.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/maty-drewniano-bambusowe-rzymski.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "maty-drewniano-bambusowe-rzymski.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "markizy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy-tarasowe.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "markizy-tarasowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy-solaro-topline-naja-solarbreaker.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "markizy-solaro-topline-naja-solarbreaker.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy-kasetowe-solaro-topline-naja-solarbreaker.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "markizy-kasetowe-solaro-topline-naja-solarbreaker.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy-evo.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "markizy-evo.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/markizy-bistro.html",
      inject: true,
      chunks: ["index","hamburger","tooltip"],
      filename: "markizy-bistro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pergole.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "pergole.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pergole-segmentowa.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "pergole-segmentowa.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pergole-verandowa.html",
      inject: true,
      chunks: ["index","hamburger"],
      filename: "pergole-verandowa.html",
    }),
    
    
    
  ],
};
