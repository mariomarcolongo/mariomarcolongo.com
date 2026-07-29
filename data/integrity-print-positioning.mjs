import career from './research-operations-positioning.mjs';

const integrity = structuredClone(career.P.integrity);

integrity.summary = integrity.summary.replace(
  'legally sensitive chronology, multilingual content quality, source-quality and bibliometric review',
  'legally sensitive chronology, source-quality and bibliometric review'
);

const wiki = integrity.experience?.find((item) => item?.organization?.includes('Wikipedia'));
if (wiki?.bullets?.[2]) {
  wiki.bullets[2] = 'Synthesize biomedical evidence into structured taxonomies; perform cross-language adaptation with terminology and citation preservation; separate facts, allegations and inference.';
}

const entropy = integrity.experience?.find((item) => item?.organization?.includes('Entropy for Life'));
if (entropy?.bullets?.[2]) {
  entropy.bullets[2] = 'Localize English-language scientific evidence into Italian summaries while preserving meaning, source context and uncertainty.';
}

const multilingualSkill = integrity.skills?.find(
  ([title]) => title === 'Knowledge integrity and multilingual quality' || title === 'Knowledge integrity'
);
if (multilingualSkill) {
  multilingualSkill[0] = 'Knowledge integrity';
  multilingualSkill[1] = 'Claim-to-source auditing, provenance, citation, terminology and metadata review';
}

export default {
  ...career,
  P: {
    ...career.P,
    integrity
  }
};
