define("school/utils/data-providers",["exports","@ember/object","organization-addon/utils/extract-restli-element","global-utils/utils/api-compat","graphql-queries/queries/organizations/organization-companies-by-school.graphql"],(function(t,e,o,i,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.fetchSchoolV2Id=function(t,s){return s.executeQuery(n.default,{schoolUrn:t}).then((t=>{const n=(0,o.extractRestliElement)((0,e.get)(t,"data.organizationDashCompaniesBySchool"))
return(0,i.entityUrnToId)((0,e.get)(n,"entityUrn"))}))}}))
define("school/utils/school-utils",["exports","global-utils/utils/url"],(function(t,e){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.SCHOOL_HOME_URL=void 0
const o=`https://university.${(0,e.getDomainWithoutWWW)()}/linkedin-for-students`
t.SCHOOL_HOME_URL=o}))

//# sourceMappingURL=engine-vendor.map