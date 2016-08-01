import keystone from 'keystone';
let Types = keystone.Field.Types;
let Employee = new keystone.List('Employee');
 
Employee.add({
    name: Types.Name,
    emailId: { type: Types.Email, initial: true, required: true, index: true },
    googleId: Types.Text,
    googleToken: Types.Text,
    projects: { type: Types.Relationship, ref: 'Project', many: true }
});
 
Employee.register();
