
    EntityFactory.builders[Types.Entities.{{nameUppercase}}] = function(id) {
        return new {{entityClassName}}.{{nameCapital}}(id);
    };
    /* EntityFactory */