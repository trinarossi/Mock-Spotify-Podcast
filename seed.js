const { db, Series, Episode  } = require('./server/db');
const { faker } = require('@faker-js/faker');

const seed = async () => {
  try {
      await db.sync({ force: true });
      //series
      const seriesName = faker.company.bsBuzz();
      const image = faker.image.abstract();
      const hostName = faker.name.fullName();

      const podcastSeries1 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries2 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries3 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries4 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries5 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries6 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries7 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries8 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries9 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      const podcastSeries10 = await Series.create({
        name: seriesName,
        host: hostName,
        description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
        imgUrl: image
      });

      //episodes
      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2022`,
          length: "29 Min",
          explicit: false
        });
        episode.setSeries(podcastSeries1)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2022`,
          length: "29 Min",
          explicit: false
          
        });
        episode.setSeries(podcastSeries2)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2022`,
          length: "29 Min",
          explicit: false
        });
        episode.setSeries(podcastSeries3)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2022`,
          length: "29 Min",
          explicit: false
        });
        episode.setSeries(podcastSeries4)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2021`,
          length: "29 Min",
          explicit: true
        });
        episode.setSeries(podcastSeries5)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2022`,
          length: "29 Min",
          explicit: false
        });
        episode.setSeries(podcastSeries6)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2019`,
          length: "29 Min",
          explicit: true
        });
        episode.setSeries(podcastSeries7)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2018`,
          length: "29 Min",
          explicit: false
        });
        episode.setSeries(podcastSeries8)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          dateUploaded: `${month} 2019`,
          length: "29 Min",
          explicit: true
        });
        episode.setSeries(podcastSeries9)
      };

      for (let i = 0; i <= 15; i++) {
        const episodeName = faker.company.bsBuzz();
        const image = faker.image.abstract();
        const month = faker.date.month();

        const episode = await Episode.create({
          name: episodeName,
          description: "Lorem ipsum dolor sit amet, qui ex vitae apeirian urbanitas, ad vix constituam efficiantur, solum quaeque sed id. Fabellas quaestio perpetua cum an, diam voluptua per in, qualisque constituto qui te. Primis ullamcorper voluptatibus eu eos, movet causae deserunt ei vix. Nec ludus petentium definitiones ad, sea laudem ornatus et, qui et tempor quidam scribentur.",
          imgUrl: image,
          imgUrl: image,
          dateUploaded: `${month} 2018`,
          length: "29 Min",
          explicit: true
        });
        episode.setSeries(podcastSeries10)
      };
  } catch (err) {
    console.log(err)
  }
};

async function runSeed() {
  try {
    await seed()
    console.log('Seeding success!')
  } catch (err) {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
  } finally {
    db.close()
  }
};

if (require.main === module) {
  runSeed()
};
