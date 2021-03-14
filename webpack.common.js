const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    tooltip: "./src/js/tooltip.js",
    
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
      chunks: ["index", "tooltip"],
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
      chunks: ["index"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16mm.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-panelowe.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-panelowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-paneloweBasic.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-paneloweBasic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane20.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane50.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane50.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Coiflor.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane20Coiflor.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Vegas.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane20Vegas.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane50XLPleat.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane50XLPleat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-plisowane20Rippo.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-plisowane20Rippo.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzja-plisowana20.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzja-plisowana20.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzja-plisowana50.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzja-plisowana50.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome-V13.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome-V13.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/kontakt.html",
      inject: true,
      chunks: ["index"],
      filename: "kontakt.html",
    }),
 
    new HtmlWebpackPlugin({
      template: "./src/pages/regulamin.html",
      inject: true,
      chunks: ["index"],
      filename: "regulamin.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/polityka-cookies.html",
      inject: true,
      chunks: ["index"],
      filename: "polityka-cookies.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/galeria-shadowplace.html",
      inject: true,
      chunks: ["index"],
      filename: "galeria-shadowplace.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/poziome-systemy.html",
      inject: true,
      chunks: ["index"],
      filename: "poziome-systemy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe25mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe50mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16Vario.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16Vario.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16Monomagic.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16Monomagic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe16IsotraHit.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe16IsotraHit.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe25mm.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-aluminiowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25V13.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome25V13.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25Vario.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome25Vario.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25Monomagic.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-poziome25Monomagic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-poziome25IsotraHit.html",
      inject: true, 
      chunks: ["index"],
      filename: "zaluzje-poziome25IsotraHit.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35Diplomat.html",
      inject: true, 
      chunks: ["index"],
      filename: "zaluzje-aluminiowe35Diplomat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe35Basic.html",
      inject: true, 
      chunks: ["index"],
      filename: "zaluzje-aluminiowe35Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50Basic.html",
      inject: true, 
      chunks: ["index"],
      filename: "zaluzje-aluminiowe50Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-aluminiowe50Retro.html",
      inject: true, 
      chunks: ["index"],
      filename: "zaluzje-aluminiowe50Retro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25Vario.html",
      inject: true, 
      chunks: ["index"],
      filename: "drewniano-bambusowe25Vario.html",
    }),
     new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25V13.html",
      inject: true, 
      chunks: ["index"],
      filename: "drewniano-bambusowe25V13.html",
    }),   
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe25mm.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35mm.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50mm.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe50mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35mm.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe35mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe35Diplomat.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe35Diplomat.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50Basic.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe50Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drewniano-bambusowe50Retro.html",
      inject: true,
      chunks: ["index"],
      filename: "drewniano-bambusowe50Retro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-mini19.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-mini19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Midi25mm.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-Midi25mm.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-absolute.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-absolute.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-RT.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-RT.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-wolnowiszace.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-wolnowiszace.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-kasetowe.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-kasetowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-dachowe.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-dachowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-kasetowe.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-kasetowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Luisa.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-Luisa.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-absoluteStandard.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-absoluteStandard.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-Uni19.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-Uni19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-dachoweDekolux.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-dachoweDekolux.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprenzynowe.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-sprenzynowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolight.html",
      inject: true,
      chunks: ["index"],
      filename: "roletyDuolight.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprezynoweSpring32.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-sprezynoweSpring32.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-sprenzynoweBasic25.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-sprenzynoweBasic25.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rolety-duolightMini19.html",
      inject: true,
      chunks: ["index"],
      filename: "rolety-duolightMini19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuoligtUni19.html",
      inject: true,
      chunks: ["index"],
      filename: "roletyDuoligtUni19.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolightAbsolute.html",
      inject: true,
      chunks: ["index"],
      filename: "roletyDuolightAbsolute.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roletyDuolightRT.html",
      inject: true,
      chunks: ["index"],
      filename: "roletyDuolightRT.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pionowe.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-pionowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pioniwe89Basic.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-pioniwe89Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaluzje-pioniwe127Basic.html",
      inject: true,
      chunks: ["index"],
      filename: "zaluzje-pioniwe127Basic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymska.html",
      inject: true,
      chunks: ["index"],
      filename: "roleta-rzymska.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaBasic.html",
      inject: true,
      chunks: ["index"],
      filename: "roleta-rzymskaBasic.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaUltra.html",
      inject: true,
      chunks: ["index"],
      filename: "roleta-rzymskaUltra.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/roleta-rzymskaSoftline.html",
      inject: true,
      chunks: ["index"],
      filename: "roleta-rzymskaSoftline.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-reczne.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-reczne.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczne.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-elektryczne.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-reczneKS-CS.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-reczneKS-CS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneMovelite-Irismo.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-elektryczneMovelite-Irismo.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneTorro.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-elektryczneTorro.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/karnisze-elektryczneGlydea-Ultra.html",
      inject: true,
      chunks: ["index"],
      filename: "karnisze-elektryczneGlydea-Ultra.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimowe.html",
      inject: true,
      chunks: ["index"],
      filename: "ogrody-zimowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweWMU.html",
      inject: true,
      chunks: ["index"],
      filename: "ogrody-zimoweWMU.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweRoofio.html",
      inject: true,
      chunks: ["index"],
      filename: "ogrody-zimoweRoofio.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweSLS.html",
      inject: true,
      chunks: ["index"],
      filename: "ogrody-zimoweSLS.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogrody-zimoweSunshield.html",
      inject: true,
      chunks: ["index"],
      filename: "ogrody-zimoweSunshield.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-ramkowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-drzwiowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-plisowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe-kolnierzowe.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-ramkowe-kolnierzowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-ramkowe-kolnierzowe-giete.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-ramkowe-kolnierzowe-giete.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe-standard.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-drzwiowe-standard.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-drzwiowe-przesuwny.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-drzwiowe-przesuwny.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane-wnekowe.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-plisowane-wnekowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-plisowane-nawierzchniowe.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-plisowane-nawierzchniowe.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowany-pionowy.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-rolowany-pionowy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowany-poziomy.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-rolowany-poziomy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/moskitiery-rolowane.html",
      inject: true,
      chunks: ["index"],
      filename: "moskitiery-rolowane.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-moderno.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony-moderno.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-flex.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony-flex.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-ring.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony-ring.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-tasma-olowek.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony-tasma-olowek.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zaslony-tasma-smok.html",
      inject: true,
      chunks: ["index"],
      filename: "zaslony-tasma-smok.html",
    }),
    
    
  ],
};
