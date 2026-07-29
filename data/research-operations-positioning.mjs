import career from "./investigation-positioning.mjs";

const { D, P } = career;
const researchOperationsPage = "/research-operations.html";
const supervisorUrl = "https://dpss.unipd.it/en/node/239";
const departmentUrl = "https://www.unipd.it/en/dpss";

const masterFocusGroup = D.experience?.find((item) => item?.role?.includes("Focus-Group"));
if (masterFocusGroup) {
  masterFocusGroup.links = {
    researchOperations: researchOperationsPage,
    supervisor: supervisorUrl,
    department: departmentUrl
  };
}

if (P.editorialCommunity) {
  const focusGroup = P.editorialCommunity.experience?.find((item) => item?.role?.includes("Focus-Group"));
  if (focusGroup) {
    focusGroup.links = [
      { label: "Research-operations case study", url: researchOperationsPage },
      { label: "Marta Panzeri", url: supervisorUrl },
      { label: "University department", url: departmentUrl }
    ];
  }

  const sensitiveEvidence = P.editorialCommunity.evidence?.find((item) =>
    item?.title?.includes("Sensitive remote research facilitation")
  );
  if (sensitiveEvidence) {
    sensitiveEvidence.title = "Sensitive research-operations case";
    sensitiveEvidence.body = "Self-reported facilitation and protocol work in a University of Padua project. The public thesis corroborates the project and methodology but does not identify the individual facilitators.";
    sensitiveEvidence.link = researchOperationsPage;
  }
}

if (P.integrity) {
  const focusGroup = P.integrity.experience?.find((item) => item?.role?.includes("Sensitive Research Operations"));
  if (focusGroup) {
    focusGroup.links = [
      { label: "Research-operations case study", url: researchOperationsPage }
    ];
  }
}

export default career;
