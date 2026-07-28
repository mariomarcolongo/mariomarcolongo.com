import H from "./portfolio-human.js";

const integrityScope = H.scopes?.find((item) => item?.title?.includes("Knowledge integrity"));
if (integrityScope) {
  integrityScope.body = "Consumer-genomics privacy, corporate-source reconciliation, archival recovery, source-quality auditing, content-governance review and structured biomedical evidence synthesis.";
}

const integrityCase = H.cases?.find((item) => item?.id === "knowledge-integrity");
if (integrityCase) {
  integrityCase.title = "Tracing privacy, policy and evidence changes under dispute.";
  integrityCase.lead = "My public record includes consumer-genomics privacy research, corporate-source reconciliation, archival recovery, content-governance review and biomedical evidence synthesis—not a generic claim of OSINT familiarity.";
  integrityCase.action = "I built and maintained the Nebula Genomics privacy record across historical sequencing relationships, changing company statements, archived privacy policies, third-party-data questions, corporate restructuring and litigation coverage. In separate cases, I recovered missing documents for a legally sensitive chronology, audited source quality and bibliometrics during a contentious moderation process, and built a syndromic-autism taxonomy from peer-reviewed literature.";
  integrityCase.result = "Each case is linked to an exact attributed diff, edit history or collaborative discussion record, with methods and evidence boundaries documented on a dedicated page. Living-person names are not used as promotional headings when they add little hiring value.";
  integrityCase.boundary = "The work represents public-source research and collaborative knowledge governance. It does not establish company liability, personal misconduct, editor affiliation, an independent legal judgment or original clinical research.";
  integrityCase.imageCaption = "Attributed public records · privacy, archival, governance and biomedical evidence cases";
}

export default H;
