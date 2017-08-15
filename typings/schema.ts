import * as mongoose from 'mongoose';

export interface todoListSchema {

    /**
     * completed
     */

    completed:
        boolean


    /**
     * text
     */

    text:
        string


}