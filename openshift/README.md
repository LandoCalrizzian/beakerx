
Two Sigma BeakerX Ansible Operator
----------
Implementation of the ansible operator used to the deploy the BeakerX in an openshift environment

Installation
----------
The operator is currently designed to work within your existing namespace. You'll need cluster-admin privileges to create the BeakerX custom resource definition and apply the anyuid scc for the ceph container
```bash
# Add the BeakerX Custom Resource Definition. Requires cluster-admin privileges
$ oc create -f beakerx_v1alpha1_beakerx_crd.yaml

# Setup RBAC for the operator
$ oc create -f deploy/service_account.yaml
$ oc create -f deploy/role.yaml
$ oc create -f deploy/role_binding.yaml

# Deploy the BeakerX Operator in the namespace
$ oc create -f deploy/operator.yaml
```

```bash
# Deploy the BeakerX custom resources with configuration for your environment
$ oc create -f beakerx_v1alpha1_beakerx_cr.yaml
```

Directory
----------
* build/ - Dockerfile used to build the operator image
* build/beakerx-minimal-notebook - s2i files used to build the operator image
* build/beakerx-minimal-notebook/beakerx-minimal-notebook.images.json - openshift buildconfigs and imagestreams used to create the jupyter image w/ beakerx extension
* deploy/ - OpenShift templates for the CRD, RBAC and operator resources
* roles/ - Ansible role used to deploy Jupyter w/ BeakerX
* playbook.yml - Ansible playbook that manages that orchestrates the deployment of BeakerX within the namespace
* watches.yaml - Yaml that registers the Custom Resources managed by this operator
