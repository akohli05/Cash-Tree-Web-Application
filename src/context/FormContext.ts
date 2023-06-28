import { createContext, useState, useEffect } from 'react';
import * as React from 'react';

const FormContext = createContext({});

export const FormProvider: React.FC = ({ children }) => {
	return( 
    <FormContext.Provider value={{}}>
        {children}
    </FormContext.Provider>
    )
};

export default FormContext;