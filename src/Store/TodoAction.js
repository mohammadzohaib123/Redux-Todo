export default class TodoAction
{
    static ADD ='ADD';
    static DELETE='DELETE';
    static UPDATE='UPDATE';

    static add(value)
    {
        return{
        type:TodoAction.ADD,
        payload:value
        }
       
    }
    static delete(id)
    {
        return {
            type:TodoAction.DELETE,
            payload:id
        }
    }
    static update(id,inputValue)
    {
        console.log(id)
        return {
            type:TodoAction.UPDATE,
            payload:{id:id,inputValue:inputValue}
        }
    }
}