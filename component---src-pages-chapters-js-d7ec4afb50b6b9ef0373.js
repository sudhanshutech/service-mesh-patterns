"use strict";(self.webpackChunkservice_mesh_patterns=self.webpackChunkservice_mesh_patterns||[]).push([[496],{1866:function(M,N,D){D.r(N),D.d(N,{default:function(){return y}});var e=D(7294),j=D(1074),g=j.default.main.withConfig({displayName:"chaptersstyle__ChaptersStyleWrapper",componentId:"sc-1dw5sag-0"})(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-block: 3rem;\n\n  p {\n    margin: 0;\n    padding: 0;\n  }\n\n  .accordion-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: 75%;\n    padding-block: 2rem;\n\n    @media (max-width: 600px) {\n      width: 90%;\n    }\n  }\n\n  .callToAction {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    \n\n    .community-button {\n      z-index: 1;\n      gap: 1rem;\n      align-items: center;\n      justify-content: center;\n      color: #FFF;\n      background-color: #00B39F;\n      padding: 2rem 4rem;\n      transition: 100ms ease-in-out;\n\n      &:hover{\n        outline: 2px solid #00B39F;\n      }\n \n    }\n    @media (max-width: 1000px) {\n      flex-direction: column; \n      padding:1.2rem;\n      .community-button {\n        padding: 1.5rem 2rem;\n      }\n    }\n  }\n  \n"]),n=[{area:"Area I",name:"It's a Mesh Out There",topics:[{name:"A world of multiple service meshes",type:"Foundational"},{name:"Pattern: Employing planes of a service mesh",type:"Foundational"},{name:"Pattern: How a service mesh empowers a Developer",type:"Foundational"},{name:"Pattern: How a service mesh empowers a service owner",type:"Foundational"},{name:"Pattern: How a service mesh empowers an Operator: Retry Budgets",type:"Foundational"}]},{area:"Area II",name:"Patterns of Initialization and Deployment",topics:[{name:"Pattern: Expanding the Mesh to Brownfield Environments",type:"Workloads"},{name:"Pattern: How to get started with any service mesh; Local Deployment",type:"Deployment"},{name:"Pattern: Node Agents",type:"Deployment"},{name:"Pattern: Passive and Active Health Checking",type:"Deployment"},{name:"Pattern: Proxyless Service Mesh",type:"Deployment"},{name:"Pattern: Segmenting the Monolith (Strangler)",type:"Workloads"},{name:"Pattern: Sidecar Proxies",type:"Deployment"},{name:"Pattern: Workload Onboarding and Service Mesh Adoption",type:"Workloads"}]},{area:"Area III",name:"Patterns of Configuration",topics:[{name:"Pattern: Advanced Traffic Routing",type:"Traffic Manangement"},{name:"Pattern: Bulkheading with Resiliency",type:"Resiliency"},{name:"Pattern: Canary Deployments",type:"Traffic Manangement"},{name:"Pattern: Chaos Engineering with a Service Mesh",type:"Resilience"},{name:"Pattern: Circuit Breaking",type:"Traffic Manangement"},{name:"Pattern: Data plane extensibility",type:"Observability"},{name:"Pattern: Foundational Traffic Routing",type:"Traffic Manangement"},{name:"Pattern: Incorporating Business Logic in your data plane (WASM)",type:"Traffic Manangement"},{name:"Pattern: Ingress",type:"Traffic Manangement"},{name:"Pattern: Load balancing Algs",type:"Traffic Manangement"},{name:"Pattern: Local and Global Rate Limiting",type:"Traffic Manangement"},{name:"Pattern: Protocol Aware Meshing",type:"Traffic Manangement"},{name:"Pattern: Retries",type:"Traffic Manangement"},{name:"Pattern: Service Mesh Adapter Pattern (Protocol conversion using WASM)",type:"Traffic Manangement"},{name:"Pattern: Service Meshing at the Edge",type:"Traffic Manangement"},{name:"Pattern: Timeouts",type:"Traffic Manangement"},{name:"Pattern: Transparently Proxying TLS",type:"Traffic Manangement"}]},{area:"Area IV",name:"Patterns of Operation",topics:[{name:"Pattern: Advanced Data Plane Extensbility and Intelligence",type:"Troubleshooting"},{name:"Pattern: Applying Connection-level Authorization",type:"Security"},{name:"Pattern: Applying Request-level Authorization",type:"Security"},{name:"Pattern: Cloud bursting",type:"Scaling"},{name:"Pattern: Egress Gateways",type:"Security"},{name:"Pattern: Federation",type:"Scaling"},{name:"Pattern: Managing configuration change",type:"Troubleshooting"},{name:"Pattern: Multi-cluster failover",type:"Scaling"},{name:"Pattern: Using Envoy metrics",type:"Observability"},{name:"Pattern: Using Request Logs",type:"Observability"},{name:"Pattern: Using Traces",type:"Observability"},{name:"Pattern: Visualizing services",type:"Observability"},{name:"Pattern: Zero Trust: Securing in-cluster communication (mTLS) - Encryption",type:"Security"}]},{area:"Area V",name:"Performance, Testing, and Debugging, Tuning, Troubleshooting",topics:[{name:"Pattern: Debugging the Control Plane",type:"Troubleshooting"},{name:"Pattern: Debugging the Data Plane",type:"Troubleshooting"},{name:"Pattern: How to use the Service Mesh as a Debugger",type:"Debugging"},{name:"Pattern: Managing the Performance of the Service Mesh",type:"Tuning / Performance"},{name:"Pattern: Managing the Performance of the Workloads",type:"Tuning / Performance"},{name:"Pattern: Methodologies of Performance Tuning and Testing",type:"Tuning / Performance"},{name:"Pattern: TAPing into your requests",type:"Debugging"},{name:"Pattern: Using the Service Mesh for Functional Testing",type:"Validating"}]},{area:"Area VI",name:"Patterns in Practice: Employing Standards",topics:[{name:"Pattern: Baselining your workload performance",type:"Service Mesh Performance (SMP)"},{name:"Pattern: Common interface for integrating with service mesh functionality",type:"Service Mesh Interface (SMI)"},{name:"Pattern: Federating Service Catalogs",type:"Multi-Vendor Service Mesh Interoperation (Hamlet)"},{name:"Pattern: Gauging the value of your service mesh deployment",type:"Service Mesh Performance (SMP)"},{name:"Pattern: The need for abstracting the service mesh",type:"Service Mesh Interface (SMI)"}]}],I=j.default.div.withConfig({displayName:"accordionstyle__AccordionStyleWrapper",componentId:"sc-1wk74d6-0"})(["\n    .accordion-title, \n    .topic {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 1rem 2rem;\n      border-radius: 5px; \n      gap: 1rem;\n\n      @media (max-width: 600px) {\n        padding: 1rem;\n      }\n    }\n\n    .accordion-title {\n      color: white;\n      text-align: center;\n      background-color: #00B39F;\n      transition: 100ms ease-in-out;\n      cursor: pointer;\n      \n      button {\n        border: none;\n        background: none;\n        cursor: pointer;\n      }\n\n      &:hover {\n        outline: 1px solid #00B39F;\n      }\n    }\n\n    .accordion-content {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: 1rem;\n      color: #00B39F;\n      margin-top: 1rem;\n\n      .topic {\n        outline: 1px solid #00B39F;\n        background-color: #FFF;\n\n        p:nth-of-type(2) {\n          text-align: right;\n        }\n      }\n    }\n\n"]),T=function(M){var N=M.area,D=M.name,j=M.topics,g=(0,e.useState)(!1),n=g[0],T=g[1];return e.createElement(I,null,e.createElement("div",{className:"accordion-title",onClick:function(){return T((function(M){return!M}))}},e.createElement("p",null,N),e.createElement("p",null,D),e.createElement("button",{onClick:function(M){M.stopPropagation(),T((function(M){return!M}))}},n?e.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgNS40OTk5OUM0LjgxOTM0IDUuNDk5OTkgNC42NDU2NyA1LjQ2MTY2IDQuNDc5IDUuMzg0OTlDNC4zMTIzNCA1LjMwODk5IDQuMTQ1NjcgNS4xOTQ2NiAzLjk3OSA1LjA0MTk5TDEuNDE3IDIuNDc4OTlDMS4xMjUgMi4yMDA5OSAwLjk3OTAwNCAxLjg2NzY2IDAuOTc5MDA0IDEuNDc4OTlDMC45NzkwMDQgMS4wOTAzMyAxLjEyNSAwLjc0OTk5MiAxLjQxNyAwLjQ1Nzk5MkMxLjcwODM0IDAuMTgwNjU5IDIuMDQ1IDAuMDQxOTkyMiAyLjQyNyAwLjA0MTk5MjJDMi44MDkgMC4wNDE5OTIyIDMuMTQ2IDAuMTgwNjU5IDMuNDM4IDAuNDU3OTkyTDUgMi4wNDE5OUw2LjU2MiAwLjQ1Nzk5MkM2Ljg1NCAwLjE4MDY1OSA3LjE5MSAwLjA0MTk5MjIgNy41NzMgMC4wNDE5OTIyQzcuOTU1IDAuMDQxOTkyMiA4LjI5MTY3IDAuMTgwNjU5IDguNTgzIDAuNDU3OTkyQzguODc1IDAuNzQ5OTkyIDkuMDIxIDEuMDkwMzMgOS4wMjEgMS40Nzg5OUM5LjAyMSAxLjg2NzY2IDguODc1IDIuMjAwOTkgOC41ODMgMi40Nzg5OUw2LjAyMSA1LjA0MTk5QzUuODk1NjcgNS4xODA2NiA1LjczOTM0IDUuMjkxNjYgNS41NTIgNS4zNzQ5OUM1LjM2NDY3IDUuNDU4MzMgNS4xODA2NyA1LjQ5OTk5IDUgNS40OTk5OVpNMS40MTcgMTMuNUMxLjEyNSAxMy4yMDggMC45NzkwMDQgMTIuODY3NyAwLjk3OTAwNCAxMi40NzlDMC45NzkwMDQgMTIuMDkwMyAxLjEyNSAxMS43NTcgMS40MTcgMTEuNDc5TDMuOTc5IDguOTE2OTlDNC4xMzE2NyA4Ljc2NDMzIDQuMjk1IDguNjQ5NjYgNC40NjkgOC41NzI5OUM0LjY0MjM0IDguNDk2MzMgNC44MTkzNCA4LjQ1Nzk5IDUgOC40NTc5OUM1LjE4MDY3IDguNDU3OTkgNS4zNTc2NyA4LjQ5NjMzIDUuNTMxIDguNTcyOTlDNS43MDUgOC42NDk2NiA1Ljg2ODM0IDguNzY0MzMgNi4wMjEgOC45MTY5OUw4LjU2MiAxMS40MzhDOC44NCAxMS43MjkzIDguOTg2IDEyLjA3MyA5IDEyLjQ2OUM5LjAxNCAxMi44NjQzIDguODc1IDEzLjIwOCA4LjU4MyAxMy41QzguMjkxNjcgMTMuNzc4IDcuOTU1IDEzLjkxNyA3LjU3MyAxMy45MTdDNy4xOTEgMTMuOTE3IDYuODU0IDEzLjc3OCA2LjU2MiAxMy41TDUgMTEuOTM4TDMuNDM4IDEzLjVDMy4xNDYgMTMuNzc4IDIuODA5IDEzLjkxNyAyLjQyNyAxMy45MTdDMi4wNDUgMTMuOTE3IDEuNzA4MzQgMTMuNzc4IDEuNDE3IDEzLjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",alt:"open"}):e.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMzEyIDUuMjkyNDhDMS4wMzQ2NiA1LjAwMDQ4IDAuODk1OTk2IDQuNjY3MTQgMC44OTU5OTYgNC4yOTI0OEMwLjg5NTk5NiAzLjkxNzE0IDEuMDM0NjYgMy41ODM4MSAxLjMxMiAzLjI5MjQ4TDMuOTc5IDAuNjQ2NDc3QzQuMTMxNjYgMC40Nzk4MSA0LjI5NSAwLjM2MTgxIDQuNDY5IDAuMjkyNDc3QzQuNjQyMzMgMC4yMjMxNDMgNC44MTkzMyAwLjE4ODQ3NyA1IDAuMTg4NDc3QzUuMTgwNjYgMC4xODg0NzcgNS4zNjEzMyAwLjIyMzE0MyA1LjU0MiAwLjI5MjQ3N0M1LjcyMiAwLjM2MTgxIDUuODgxNjYgMC40Nzk4MSA2LjAyMSAwLjY0NjQ3N0w4LjY0NiAzLjI3MTQ4QzguOTM3MzMgMy41NDk0OCA5LjA4NjY2IDMuODgyODEgOS4wOTQgNC4yNzE0OEM5LjEwMDY2IDQuNjYwMTQgOC45NjUzMyA1LjAwMDQ4IDguNjg4IDUuMjkyNDhDOC4zOTYgNS41Njk4MSA4LjA1OSA1LjcwODQ4IDcuNjc3IDUuNzA4NDhDNy4yOTUgNS43MDg0OCA2Ljk2NTMzIDUuNTYyODEgNi42ODggNS4yNzE0OEw1IDMuNjI1NDhMMy4zMzMgNS4yNzE0OEMzLjA1NTY2IDUuNTYyODEgMi43MjIzMyA1LjcwODQ4IDIuMzMzIDUuNzA4NDhDMS45NDQzMyA1LjcwODQ4IDEuNjA0IDUuNTY5ODEgMS4zMTIgNS4yOTI0OFpNNSAxNS43OTI1QzQuODE5MzMgMTUuNzkyNSA0LjY0MjMzIDE1Ljc1NDEgNC40NjkgMTUuNjc3NUM0LjI5NSAxNS42MDA4IDQuMTMxNjYgMTUuNDg2MSAzLjk3OSAxNS4zMzM1TDEuMzEyIDEyLjY4ODVDMS4wMzQ2NiAxMi4zOTY1IDAuODk1OTk2IDEyLjA2MzEgMC44OTU5OTYgMTEuNjg4NUMwLjg5NTk5NiAxMS4zMTMxIDEuMDM0NjYgMTAuOTc5OCAxLjMxMiAxMC42ODg1QzEuNjA0IDEwLjM5NjUgMS45MzczMyAxMC4yNTA1IDIuMzEyIDEwLjI1MDVDMi42ODczMyAxMC4yNTA1IDMuMDIwNjYgMTAuMzk2NSAzLjMxMiAxMC42ODg1TDUgMTIuMzU0NUw2LjY2NyAxMC43MDg1QzYuOTQ0MzMgMTAuNDE3MSA3LjI3NzY2IDEwLjI2NzggNy42NjcgMTAuMjYwNUM4LjA1NTY2IDEwLjI1MzggOC4zOTYgMTAuMzk2NSA4LjY4OCAxMC42ODg1QzguOTY1MzMgMTAuOTc5OCA5LjEwNCAxMS4zMTMxIDkuMTA0IDExLjY4ODVDOS4xMDQgMTIuMDYzMSA4Ljk2NTMzIDEyLjM5NjUgOC42ODggMTIuNjg4NUw2LjAyMSAxNS4zMzM1QzUuODgxNjYgMTUuNDg2MSA1LjcyMiAxNS42MDA4IDUuNTQyIDE1LjY3NzVDNS4zNjEzMyAxNS43NTQxIDUuMTgwNjYgMTUuNzkyNSA1IDE1Ljc5MjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",alt:"close"}))),n&&e.createElement("div",{className:"accordion-content"},j.map((function(M,N){return e.createElement("div",{className:"topic",key:N},e.createElement("p",null,M.name),e.createElement("p",null,M.type))}))))},z=D(8080);var i=function(){return e.createElement(g,null,e.createElement("h1",null,"Chapters of the Book"),e.createElement("div",{className:"accordion-container"},n.map((function(M,N){return e.createElement(T,{key:N,area:M.area,name:M.name,topics:M.topics})}))),e.createElement("section",{className:"callToAction"},e.createElement("h4",null,"Discuss patterns and best practices on the"),e.createElement(z.Z,{url:"https://discuss.layer5.io/",className:"community-button",title:"Community Discussion Forum",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTAwIDE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTAzNjRfNjgpIj4KPHBhdGggZD0iTTMuOTg3NTUgMEgwLjc4Njg2NVYxNkgxNS45NTZWMTIuODAxSDMuOTg3NTVWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMy45NjI4IDBMMTcuNTYzMSAxNkgyMS4yMTI1TDI1LjU2MzEgNC44MDEwMkwyOC42NjMxIDEyLjgwMUgyMy4zNDUyTDIyLjE1MDkgMTZIMzMuNTYzMUwyNy4xNjE3IDBIMjMuOTYyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOC4wNzkyIDUuNjAxMTlMMzQuMDgwMSAwSDMwLjA3OTJMMzYuNDc4OSA5LjYwMDM0VjE2SDM5LjY3OTZWOS42MDAzNEw0Ni4wNzkyIDBINDIuMTI5NkwzOC4wNzkyIDUuNjAxMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDcuNDU5NSAyLjUxOTk0VjMuMjAwNjhWNi4zOTk2NlYxMC4zMDMzVjE2SDYyLjYyNjlWMTIuODAxSDUwLjY2MDJWMTAuMzAzM1Y5LjYwMDM0SDU5Ljg1NDRWNi4zOTk2Nkg1MC42NjAyVjMuMjAwNjhINjIuNjI2OVYwSDQ3LjQ1OTVWMi41MTk5NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02Ny44MjM3IDMuMDUwNTRINzYuMDI2OFY2LjM3OTE5SDY4LjcxMDlMNjguNzQxNiA5LjQyOTczSDcwLjkzNzRMNzYuNzM4MiAxNkg4MC42ODk2TDc0Ljg4ODggOS40Mjk3M0g3Ny4xNTI4Qzc3LjQ3OTIgOS40Mjk5NSA3Ny44MDI0IDkuMzY1ODcgNzguMTAzOSA5LjI0MTEzQzc4LjQwNTUgOS4xMTYzOSA3OC42Nzk2IDguOTMzNDUgNzguOTEwNCA4LjcwMjc1Qzc5LjE0MTMgOC40NzIwNiA3OS4zMjQ0IDguMTk4MTQgNzkuNDQ5NCA3Ljg5NjY0Qzc5LjU3NDMgNy41OTUxNCA3OS42Mzg2IDcuMjcxOTggNzkuNjM4NiA2Ljk0NTYyVjIuNDg1ODJDNzkuNjM4NiAyLjE1OTIzIDc5LjU3NDMgMS44MzU4NSA3OS40NDkyIDEuNTM0MTRDNzkuMzI0MiAxLjIzMjQ0IDc5LjE0MDkgMC45NTgzMjggNzguOTA5OSAwLjcyNzQ3NkM3OC42Nzg5IDAuNDk2NjI0IDc4LjQwNDcgMC4zMTM1NTYgNzguMTAyOSAwLjE4ODczMkM3Ny44MDExIDAuMDYzOTA4NiA3Ny40Nzc3IC0wLjAwMDIyMzU2NCA3Ny4xNTExIDUuODU1NDVlLTA3SDY0LjY5NjRWMTZINjcuODk3MUw2Ny44MjM3IDMuMDUwNTRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTguNjM5NyAwSDkyLjMzOVYzLjAzNTE5SDk4LjYzOTdWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05OS4yMTMgMTAuMjI0OFY4Ljk2NTY1Qzk5LjIxMyA3LjUxODg2IDk3Ljk5NDggNi4zNDUwNSA5Ni40OTM0IDYuMzQ1MDVIODYuMzI0OVY1LjUxNzU4SDgyLjYwMjJWOS4xMDA0M0g5NS40OTAyVjEwLjIyMTRMOTkuMjEzIDEwLjIyNDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik04Ni4zMjQ5IDQuNTI0NjNWMy4wMzUxOUg5MS4zMTAyVjBIODIuNjAyMlY0LjUyNDYzSDg2LjMyNDlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik05NS40OTAyIDExLjE5OTJWMTIuOTY2OEg5MC41MDQ5VjE2LjAwMDJIOTYuNjQ2OUM5OC4wNjQ3IDE2LjAwMDIgOTkuMjA2MSAxNC44OTQ3IDk5LjIwNjEgMTMuNTI5OFYxMS4xOTkySDk1LjQ5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODYuMDI2NCAxMS4zNjQzVjEyLjk2NjNIODkuNDc2MlYxNS45OTk4SDg1LjA0MDNDODMuNjIyNSAxNS45OTk4IDgyLjQ4MTEgMTQuODk0MiA4Mi40ODExIDEzLjUyOTNWMTEuMzY0M0g4Ni4wMjY0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDM2NF82OCI+CjxyZWN0IHdpZHRoPSI5OC40MjYxIiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43ODY4NjUpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},e.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDk1MiA4LjgzMzY2QzUuNDk1MiA5Ljc1NDQ5IDQuNzQ5MzcgMTAuNTAwMyAzLjgyODUzIDEwLjUwMDNDMi45MDc3IDEwLjUwMDMgMi4xNjE4NyA5Ljc1NDQ5IDIuMTYxODcgOC44MzM2NkMyLjE2MTg3IDcuOTEyODMgMi45MDc3IDcuMTY2OTkgMy44Mjg1MyA3LjE2Njk5QzQuNzQ5MzcgNy4xNjY5OSA1LjQ5NTIgNy45MTI4MyA1LjQ5NTIgOC44MzM2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy44Mjg1MyA5LjY2Njk5QzQuMDQ5NTUgOS42NjY5OSA0LjI2MTUxIDkuNTc5MTkgNC40MTc3OSA5LjQyMjkxQzQuNTc0MDcgOS4yNjY2MyA0LjY2MTg3IDkuMDU0NjcgNC42NjE4NyA4LjgzMzY2QzQuNjYxODcgOC42MTI2NCA0LjU3NDA3IDguNDAwNjggNC40MTc3OSA4LjI0NDRDNC4yNjE1MSA4LjA4ODEyIDQuMDQ5NTUgOC4wMDAzMyAzLjgyODUzIDguMDAwMzNDMy42MDc1MiA4LjAwMDMzIDMuMzk1NTYgOC4wODgxMiAzLjIzOTI4IDguMjQ0NEMzLjA4MyA4LjQwMDY4IDIuOTk1MiA4LjYxMjY0IDIuOTk1MiA4LjgzMzY2QzIuOTk1MiA5LjA1NDY3IDMuMDgzIDkuMjY2NjMgMy4yMzkyOCA5LjQyMjkxQzMuMzk1NTYgOS41NzkxOSAzLjYwNzUyIDkuNjY2OTkgMy44Mjg1MyA5LjY2Njk5Wk0zLjgyODUzIDEwLjUwMDNDNC43NDkzNyAxMC41MDAzIDUuNDk1MiA5Ljc1NDQ5IDUuNDk1MiA4LjgzMzY2QzUuNDk1MiA3LjkxMjgzIDQuNzQ5MzcgNy4xNjY5OSAzLjgyODUzIDcuMTY2OTlDMi45MDc3IDcuMTY2OTkgMi4xNjE4NyA3LjkxMjgzIDIuMTYxODcgOC44MzM2NkMyLjE2MTg3IDkuNzU0NDkgMi45MDc3IDEwLjUwMDMgMy44Mjg1MyAxMC41MDAzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAuMjg2ODY1IDEzLjIyNjhDMC4yODY4NjUgMTEuOTY3NiAyLjY0NjQ1IDExLjMzMyAzLjgyODUzIDExLjMzM0M1LjAxMDYyIDExLjMzMyA3LjM3MDIgMTEuOTY3NiA3LjM3MDIgMTMuMjI2OFYxNS40OTk3SDAuMjg2ODY1VjEzLjIyNjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMjU5MzcgMTIuOTkyNkMxLjEyNzcgMTMuMTIyNiAxLjEyMDIgMTMuMTk3MiAxLjEyMDIgMTMuMjI3MlYxNC42NjYzSDYuNTM2ODdWMTMuMjI2OEM2LjUzNjg3IDEzLjE5NzYgNi41MjkzNyAxMy4xMjI2IDYuMzk3NyAxMi45OTI2QzYuMjU4NTMgMTIuODU1NSA2LjAyODk1IDEyLjcwODQgNS43MTQzNiAxMi41NzM4QzUuMDgxMDMgMTIuMzAyNiA0LjMwNzcgMTIuMTY2MyAzLjgyODUzIDEyLjE2NjNDMy4zNDkzNyAxMi4xNjYzIDIuNTc1NjIgMTIuMzAyNiAxLjk0MjcgMTIuNTczOEMxLjYyODEyIDEyLjcwODQgMS4zOTg1MyAxMi44NTU1IDEuMjU5MzcgMTIuOTkyNlYxMi45OTI2Wk0zLjgyODUzIDExLjMzM0MyLjY0NjQ1IDExLjMzMyAwLjI4Njg2NSAxMS45Njc2IDAuMjg2ODY1IDEzLjIyNjhWMTUuNDk5N0g3LjM3MDJWMTMuMjI2OEM3LjM3MDIgMTEuOTY3NiA1LjAxMDYyIDExLjMzMyAzLjgyODUzIDExLjMzM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy40MTE4IDguODMzNjZDMTMuNDExOCA5Ljc1NDQ5IDEyLjY2NiAxMC41MDAzIDExLjc0NTIgMTAuNTAwM0MxMC44MjQzIDEwLjUwMDMgMTAuMDc4NSA5Ljc1NDQ5IDEwLjA3ODUgOC44MzM2NkMxMC4wNzg1IDcuOTEyODMgMTAuODI0MyA3LjE2Njk5IDExLjc0NTIgNy4xNjY5OUMxMi42NjYgNy4xNjY5OSAxMy40MTE4IDcuOTEyODMgMTMuNDExOCA4LjgzMzY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43NDUyIDkuNjY2OTlDMTEuOTY2MiA5LjY2Njk5IDEyLjE3ODEgOS41NzkxOSAxMi4zMzQ0IDkuNDIyOTFDMTIuNDkwNyA5LjI2NjYzIDEyLjU3ODUgOS4wNTQ2NyAxMi41Nzg1IDguODMzNjZDMTIuNTc4NSA4LjYxMjY0IDEyLjQ5MDcgOC40MDA2OCAxMi4zMzQ0IDguMjQ0NEMxMi4xNzgxIDguMDg4MTIgMTEuOTY2MiA4LjAwMDMzIDExLjc0NTIgOC4wMDAzM0MxMS41MjQxIDguMDAwMzMgMTEuMzEyMiA4LjA4ODEyIDExLjE1NTkgOC4yNDQ0QzEwLjk5OTYgOC40MDA2OCAxMC45MTE4IDguNjEyNjQgMTAuOTExOCA4LjgzMzY2QzEwLjkxMTggOS4wNTQ2NyAxMC45OTk2IDkuMjY2NjMgMTEuMTU1OSA5LjQyMjkxQzExLjMxMjIgOS41NzkxOSAxMS41MjQxIDkuNjY2OTkgMTEuNzQ1MiA5LjY2Njk5Wk0xMS43NDUyIDEwLjUwMDNDMTIuNjY2IDEwLjUwMDMgMTMuNDExOCA5Ljc1NDQ5IDEzLjQxMTggOC44MzM2NkMxMy40MTE4IDcuOTEyODMgMTIuNjY2IDcuMTY2OTkgMTEuNzQ1MiA3LjE2Njk5QzEwLjgyNDMgNy4xNjY5OSAxMC4wNzg1IDcuOTEyODMgMTAuMDc4NSA4LjgzMzY2QzEwLjA3ODUgOS43NTQ0OSAxMC44MjQzIDEwLjUwMDMgMTEuNzQ1MiAxMC41MDAzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkuNDUzNTcgNy45OTk2N0M5LjQ1MzU3IDguOTIwNTEgOC43MDc3NCA5LjY2NjM0IDcuNzg2OTEgOS42NjYzNEM2Ljg2NjA3IDkuNjY2MzQgNi4xMjAyNCA4LjkyMDUxIDYuMTIwMjQgNy45OTk2N0M2LjEyMDI0IDcuMDc4ODQgNi44NjYwNyA2LjMzMzAxIDcuNzg2OTEgNi4zMzMwMUM4LjcwNzc0IDYuMzMzMDEgOS40NTM1NyA3LjA3ODg0IDkuNDUzNTcgNy45OTk2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy43ODY5MSA4LjgzMzAxQzguMDA3OTIgOC44MzMwMSA4LjIxOTg4IDguNzQ1MjEgOC4zNzYxNiA4LjU4ODkzQzguNTMyNDQgOC40MzI2NSA4LjYyMDI0IDguMjIwNjkgOC42MjAyNCA3Ljk5OTY3QzguNjIwMjQgNy43Nzg2NiA4LjUzMjQ0IDcuNTY2NyA4LjM3NjE2IDcuNDEwNDJDOC4yMTk4OCA3LjI1NDE0IDguMDA3OTIgNy4xNjYzNCA3Ljc4NjkxIDcuMTY2MzRDNy41NjU4OSA3LjE2NjM0IDcuMzUzOTMgNy4yNTQxNCA3LjE5NzY1IDcuNDEwNDJDNy4wNDEzNyA3LjU2NjcgNi45NTM1NyA3Ljc3ODY2IDYuOTUzNTcgNy45OTk2N0M2Ljk1MzU3IDguMjIwNjkgNy4wNDEzNyA4LjQzMjY1IDcuMTk3NjUgOC41ODg5M0M3LjM1MzkzIDguNzQ1MjEgNy41NjU4OSA4LjgzMzAxIDcuNzg2OTEgOC44MzMwMVY4LjgzMzAxWk03Ljc4NjkxIDkuNjY2MzRDOC43MDc3NCA5LjY2NjM0IDkuNDUzNTcgOC45MjA1MSA5LjQ1MzU3IDcuOTk5NjdDOS40NTM1NyA3LjA3ODg0IDguNzA3NzQgNi4zMzMwMSA3Ljc4NjkxIDYuMzMzMDFDNi44NjYwNyA2LjMzMzAxIDYuMTIwMjQgNy4wNzg4NCA2LjEyMDI0IDcuOTk5NjdDNi4xMjAyNCA4LjkyMDUxIDYuODY2MDcgOS42NjYzNCA3Ljc4NjkxIDkuNjY2MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNy4zNzAyMSAzLjM0NzA4QzcuMzcwMjEgMi44MTMgNy4xNTgwNSAyLjMwMDggNi43ODA0IDEuOTIzMTVDNi40MDI3NSAxLjU0NTUgNS44OTA1NCAxLjMzMzMzIDUuMzU2NDYgMS4zMzMzM0g0LjAzNjA1QzMuNDg5NjkgMS4zMzI0NSAyLjk2NDg2IDEuNTQ2MzMgMi41NzQ3NCAxLjkyODgzQzIuMTg0NjEgMi4zMTEzNCAxLjk2MDQzIDIuODMxODQgMS45NTA1NCAzLjM3ODEyQzEuOTQwNjQgMy45MjQzOSAyLjE0NTgyIDQuNDUyNjcgMi41MjE4NCA0Ljg0OTA1QzIuODk3ODYgNS4yNDU0NCAzLjQxNDYgNS40NzgxOCAzLjk2MDYzIDUuNDk3MDhMNC4wMzY4OCA1LjVWNi4zMzMzM0M0LjAzNjg4IDYuMzMzMzMgNy4zNzAyMSA1Ljg0NzA4IDcuMzcwMjEgMy4zNDcwOFpNOC42MjAyMSAyLjY4MTY3QzguNjIwMjEgMi4xMDMwNSA4Ljg1MDA3IDEuNTQ4MTQgOS4yNTkyMSAxLjEzOUM5LjY2ODM1IDAuNzI5ODU0IDEwLjIyMzMgMC41IDEwLjgwMTkgMC41SDEzLjIwMzVDMTMuNzU2MSAwLjUgMTQuMjg2IDAuNzE5NDkzIDE0LjY3NjcgMS4xMTAxOUMxNS4wNjc0IDEuNTAwODkgMTUuMjg2OSAyLjAzMDggMTUuMjg2OSAyLjU4MzMzQzE1LjI4NjkgMy4xMzU4NyAxNS4wNjc0IDMuNjY1NzcgMTQuNjc2NyA0LjA1NjQ3QzE0LjI4NiA0LjQ0NzE3IDEzLjc1NjEgNC42NjY2NyAxMy4yMDM1IDQuNjY2NjdIMTIuMzcwMlY1LjkxNjY3QzEyLjM3MDIgNS45MTY2NyA4LjYyMDIxIDUuMzkgOC42MjAyMSAyLjY4MTY3Wk04LjIwMzU1IDEzLjIyNzFDOC4yMDM1NSAxMS45Njc5IDEwLjU2MzEgMTEuMzMzMyAxMS43NDUyIDExLjMzMzNDMTIuOTI3MyAxMS4zMzMzIDE1LjI4NjkgMTEuOTY3OSAxNS4yODY5IDEzLjIyNzFWMTUuNUg4LjIwMzU1VjEzLjIyNzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTc2MDggMTIuOTkyOUM5LjA0NDQxIDEzLjEyMjkgOS4wMzY5MSAxMy4xOTc1IDkuMDM2OTEgMTMuMjI3NVYxNC42NjY3SDE0LjQ1MzZWMTMuMjI3MUMxNC40NTM2IDEzLjE5NzkgMTQuNDQ2MSAxMy4xMjI5IDE0LjMxNDQgMTIuOTkyOUMxNC4xNzUyIDEyLjg1NTggMTMuOTQ1NyAxMi43MDg4IDEzLjYzMTEgMTIuNTc0MkMxMi45OTc3IDEyLjMwMjkgMTIuMjI0NCAxMi4xNjY3IDExLjc0NTIgMTIuMTY2N0MxMS4yNjYxIDEyLjE2NjcgMTAuNDkyMyAxMi4zMDI5IDkuODU5NDEgMTIuNTc0MkM5LjU0NDgzIDEyLjcwODggOS4zMTUyNSAxMi44NTU4IDkuMTc2MDggMTIuOTkyOVYxMi45OTI5Wk0xMS43NDUyIDExLjMzMzNDMTAuNTYzMiAxMS4zMzMzIDguMjAzNTggMTEuOTY3OSA4LjIwMzU4IDEzLjIyNzFWMTUuNUgxNS4yODY5VjEzLjIyNzFDMTUuMjg2OSAxMS45Njc5IDEyLjkyNzMgMTEuMzMzMyAxMS43NDUyIDExLjMzMzNaTTcuNzg2OTEgMTIuNTgzM1YxMi4zOTM3QzcuNzg2OTEgMTEuNjk1IDcuMDE3MzMgMTEuMTg4MyA2LjExODE2IDEwLjg3NThDNi42Mzk5NyAxMC42MjkzIDcuMjA5NzggMTAuNTAwOSA3Ljc4NjkxIDEwLjVDOC4zNjQwNSAxMC41MDA5IDguOTMzODUgMTAuNjI5MyA5LjQ1NTY2IDEwLjg3NThDOC41NTY5MSAxMS4xODgzIDcuNzg2OTEgMTEuNjk1IDcuNzg2OTEgMTIuMzkzN1YxMi41ODMzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljc4NjkxIDEyLjU4MzNWMTIuMzkzOEM3Ljc4NjkxIDEyLjAyMTcgOC4wMDUyNSAxMS43MDM4IDguMzQ1MjUgMTEuNDQwOEM4LjM2NDc0IDExLjQyNTkgOC4zODQ0NyAxMS40MTE0IDguNDA0NDEgMTEuMzk3MUM4LjY5NDQxIDExLjE4NjMgOS4wNjI3NSAxMS4wMTI1IDkuNDU1NjYgMTAuODc2M0M5LjA2NTQgMTAuNjkyMiA4LjY0NzY2IDEwLjU3MzMgOC4yMTkgMTAuNTI0MkM3LjkzMTk4IDEwLjQ5MTkgNy42NDIyNiAxMC40OTE5IDcuMzU1MjUgMTAuNTI0MkM2LjkyNjQ3IDEwLjU3MzEgNi41MDg1OCAxMC42OTE5IDYuMTE4MTYgMTAuODc1OEM2LjUxMTA4IDExLjAxMjUgNi44Nzk0MSAxMS4xODYzIDcuMTY5ODMgMTEuMzk2N0M3LjE4OTgzIDExLjQxMTMgNy4yMDkgMTEuNDI1OCA3LjIyODE2IDExLjQ0MDhDNy41Njg1OCAxMS43MDMzIDcuNzg2OTEgMTIuMDIxNyA3Ljc4NjkxIDEyLjM5MzhWMTIuNTgzM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",alt:"layer5 logo"}))))},t=D(935),a=D(9357),u=D(8805),A=D(2530),y=function(){return e.createElement(e.Fragment,null,e.createElement(a.Z,{title:"Service Mesh Patterns - Chapters and Topics",description:"Chapters and topics found in the Service Mesh Patterns book"}),e.createElement(t.Z,null,e.createElement(u.Z,null),e.createElement(i,null),e.createElement(A.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-chapters-js-d7ec4afb50b6b9ef0373.js.map