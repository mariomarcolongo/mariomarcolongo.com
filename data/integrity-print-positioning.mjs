import career from './research-operations-positioning.mjs';

const integrity = structuredClone(career.P.integrity);

integrity.summary = integrity.summary.replace(
  'legally sensitive chronology, multilingual content quality, source-quality and bibliometric review',
  'legally sensitive chronology, source-quality and bibliometric review'
);

integrity.summary = integrity.summary.replace(
  'structured metadata and adversarial AI evaluation',
  'structured metadata, multi-source data analysis and visualization, and adversarial AI evaluation'
);

const wiki = integrity.experience?.find((item) => item?.organization?.includes('Wikipedia'));
if (wiki?.bullets?.[2]) {
  wiki.bullets[2] = 'Synthesize biomedical evidence into structured taxonomies; perform cross-language adaptation with terminology and citation preservation; separate facts, allegations and inference.';
}

const entropy = integrity.experience?.find((item) => item?.organization?.includes('Entropy for Life'));
if (entropy?.bullets?.[2]) {
  entropy.bullets[2] = 'Localize English-language scientific evidence into Italian summaries while preserving meaning, source context and uncertainty.';
}

const gray = integrity.experience?.find((item) => item?.role?.includes('Model-Behavior'));
if (gray?.bullets?.[0]) {
  gray.bullets[0] = 'Tested chat, image, tool-use and indirect prompt-injection challenges, including extreme and otherwise sensitive content; #74 globally (top 6%) with 113 platform-displayed breaks on 29 July 2026. Analytical evaluation evidence, not production enforcement experience.';
}

if (integrity.evidence?.[2]) {
  integrity.evidence[2] = {
    title: 'Structured-data analysis and visualization',
    body: 'Built a public explorer combining FAOSTAT, NCD-RisC and World Bank datasets into interactive views with documented transformations, assumptions and methodological limitations.',
    link: 'https://jnton.github.io/protein-by-bodyweight-country/'
  };
}

const multilingualSkill = integrity.skills?.find(
  ([title]) => title === 'Knowledge integrity and multilingual quality' || title === 'Knowledge integrity'
);
if (multilingualSkill) {
  multilingualSkill[0] = 'Knowledge integrity';
  multilingualSkill[1] = 'Claim-to-source auditing, provenance, citation, terminology and metadata review';
}

const aiSkill = integrity.skills?.find(([title]) => title === 'AI adversarial analysis');
if (aiSkill) {
  aiSkill[0] = 'AI and technical analysis';
  aiSkill[1] = 'Adversarial LLM testing; JavaScript, JSON, REST APIs, structured metadata and functional verification of evidence-oriented tools';
}

export default {
  ...career,
  P: {
    ...career.P,
    integrity
  }
};
