import ChannelDto from "../dto/ChannelDto";

export const channels: ChannelDto[] = [
        { id: 1, name: 'Анонс', projectName: '', isInternal: true, externalSubchatName:'', areParticipantsVisible:false},
        { id: 2, name: 'Internal Chat', projectName: 'AB', isInternal: true, externalSubchatName:'', areParticipantsVisible:true},
        { id: 3, name: 'Incidents', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_1(MatterMost)', areParticipantsVisible:true},
        { id: 4, name: 'General', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_1(MatterMost)', areParticipantsVisible:true},
        { id: 5, name: 'Deployement', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_2(Teams)', areParticipantsVisible:true},
        { id: 6, name: 'SOPs', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_2(Teams)', areParticipantsVisible:true},
        { id: 7, name: 'V_1_0', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_3(Webex)', areParticipantsVisible:true},
        { id: 8, name: 'Support', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_3(Webex)', areParticipantsVisible:true},
        { id: 9, name: 'Official claims', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_4(email)', areParticipantsVisible:true},
        { id: 10, name: 'Service', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_4(email)', areParticipantsVisible:true},
        { id: 11, name: 'V_2_1', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_5(jira)', areParticipantsVisible:true},
        { id: 12, name: 'General', projectName: 'AB', isInternal: false, externalSubchatName:'Чат_5(jira)', areParticipantsVisible:true},        
        { id: 13, name: 'Internal Chat', projectName: 'BB', isInternal: true, externalSubchatName:'', areParticipantsVisible:true},
        { id: 14, name: 'Incidents', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_1(MatterMost)', areParticipantsVisible:true},
        { id: 15, name: 'General', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_1(MatterMost)', areParticipantsVisible:true},
        { id: 16, name: 'Deployement', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_2(Teams)', areParticipantsVisible:true},
        { id: 17, name: 'SOPs', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_2(Teams)', areParticipantsVisible:true},
        { id: 18, name: 'V_1_0', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_3(Webex)', areParticipantsVisible:true},
        { id: 19, name: 'Support', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_3(Webex)', areParticipantsVisible:true},
        { id: 20, name: 'Official claims', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_4(email)', areParticipantsVisible:true},
        { id: 21, name: 'Service', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_4(email)', areParticipantsVisible:true},
        { id: 22, name: 'V_2_1', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_5(jira)', areParticipantsVisible:true},
        { id: 23, name: 'General', projectName: 'BB', isInternal: false, externalSubchatName:'Чат_5(jira)', areParticipantsVisible:true},        
    
    ];

    export const collapsedProjects = [
        {headerName: "AB", isCollapsed: true},
        {headerName: "BB", isCollapsed: true},
    ];

    export const collapsedSubchats = [
        {projectName: "AB", headerName: "Чат_1(MatterMost)", isCollapsed: true},
        {projectName: "AB", headerName: "Чат_2(Teams)", isCollapsed: true},
        {projectName: "AB", headerName: "Чат_3(Webex)", isCollapsed: true},
        {projectName: "AB", headerName: "Чат_4(email)", isCollapsed: true},
        {projectName: "AB", headerName: "Чат_5(jira)", isCollapsed: true},
        {projectName: "BB", headerName: "Чат_1(MatterMost)", isCollapsed: true},
        {projectName: "BB", headerName: "Чат_2(Teams)", isCollapsed: true},
        {projectName: "BB", headerName: "Чат_3(Webex)", isCollapsed: true},
        {projectName: "BB", headerName: "Чат_4(email)", isCollapsed: true},
        {projectName: "BB", headerName: "Чат_5(jira)", isCollapsed: true},
    ];

    export class CollapseService {
        
        static getStatusProject(headerName: string) {
            const index = collapsedProjects.findIndex((project) => {return project.headerName == headerName});
            if (~index) {
             return collapsedProjects[index].isCollapsed;
                         }
             return false;     
        }

        static getStatusSubchats(projectName: string, headerName: string) {
            const index = collapsedSubchats.findIndex((subchat) => {return subchat.projectName == projectName && subchat.headerName == headerName});
            if (~index) {
                return collapsedSubchats[index].isCollapsed;
            }
            return false;
         }
     
        static changeStatusProject(headerName: string) {
        const index = collapsedProjects.findIndex((project) => {return project.headerName == headerName});
        if (~index) {
            const currentStatus:boolean = collapsedProjects[index].isCollapsed;
            collapsedProjects[index] = {headerName: headerName, isCollapsed: !currentStatus};
        }
     } 
     
        static changeSubchatsService(projectName: string, headerName: string) {
        const index = collapsedSubchats.findIndex((subchat) => {return subchat.projectName == projectName && subchat.headerName == headerName});
        if (~index) {
            const currentStatus:boolean = collapsedSubchats[index].isCollapsed;
            collapsedSubchats[index] = {projectName:projectName, headerName: headerName, isCollapsed: !currentStatus};
        }
     }
     
    }