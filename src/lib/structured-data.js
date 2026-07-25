const SITE = 'https://mariomarcolongo.com';

function buildCredentials(d) {
  return (d.education || [])
    .filter((item) => item.credentialUrl || /certificate|certification|training/i.test(`${item.title} ${item.status || ''}`))
    .map((item) => ({
      '@type': 'EducationalOccupationalCredential',
      name: item.title,
      credentialCategory: item.status || item.institution || 'Professional development',
      recognizedBy: item.institution ? { '@type': 'Organization', name: item.institution } : undefined,
      url: item.credentialUrl || undefined,
      dateCreated: item.period || undefined
    }));
}

function buildProfileGraph(d, pageUrl, pageName) {
  const yourselfToScience = (d.projects || []).find((project) => project.id === 'yourself-to-science');
  const ytsUrl = yourselfToScience?.links?.website || 'https://yourselftoscience.org';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#webpage`,
        name: pageName,
        url: pageUrl,
        mainEntity: { '@id': `${SITE}/#person` }
      },
      {
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: d.identity.name,
        jobTitle: d.identity.jobTitle,
        description: d.summary,
        url: SITE,
        identifier: d.identity.orcidUrl,
        sameAs: d.identity.sameAs,
        subjectOf: d.identity.subjectOf,
        knowsAbout: [
          'Model behavior evaluation',
          'Scientific evidence review',
          'Evaluation operations',
          'Primary-source fact-checking',
          'Open science metadata',
          'Research-participation directories',
          'Public personal-genomics workflows',
          'Technical product delivery'
        ],
        hasCredential: buildCredentials(d)
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${ytsUrl}/#app`,
        name: 'Yourself to Science™',
        applicationCategory: 'ScientificApplication',
        operatingSystem: 'Web',
        description: 'Open-source research-participation directory indexing more than 55 clinical studies, biobanks, donation programmes, registries and other research initiatives.',
        url: ytsUrl,
        author: { '@id': `${SITE}/#person` },
        hasPart: [
          {
            '@type': 'Dataset',
            name: 'Yourself to Science dataset',
            license: 'https://creativecommons.org/publicdomain/zero/1.0/'
          },
          {
            '@type': 'SoftwareSourceCode',
            name: 'Yourself to Science source code',
            codeRepository: yourselfToScience?.links?.github,
            license: 'https://www.gnu.org/licenses/agpl-3.0.html'
          },
          {
            '@type': 'CreativeWork',
            name: 'Yourself to Science website content',
            license: 'https://creativecommons.org/licenses/by-sa/4.0/'
          }
        ]
      },
      {
        '@type': 'Dataset',
        '@id': `${SITE}/#genomic-dataset`,
        name: '41× Whole Genome Sequencing Raw Paired-End FASTQ Reads (DNBSEQ-T7)',
        description: 'Personal 41× whole-genome sequencing raw paired-end FASTQ reads released to the public domain under ENA BioSample SAMEA121950568 and Study PRJEB109744.',
        license: 'https://creativecommons.org/publicdomain/zero/1.0/',
        creator: { '@id': `${SITE}/#person` },
        url: d.identity.enaUrl
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${SITE}/#genomic-pipeline`,
        name: 'Personal Genomics Workflow and Open-Data Pipeline (git-nome)',
        description: 'Workflow for processing personal whole-genome sequencing data, downstream variant formats and research-oriented polygenic-score calculations.',
        codeRepository: 'https://github.com/jnton/git-nome',
        author: { '@id': `${SITE}/#person` }
      }
    ]
  };
}

export { buildProfileGraph };
