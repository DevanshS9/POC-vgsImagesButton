using System;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace QuickStart.Standard
{
    public class LocalMethods
    {
        public async Task<object> monitorHealthCard(dynamic input)
        {
            //return AppDomain.CurrentDomain.BaseDirectory;
            return " Health Card checking completed.";
        }

        public async Task<object> sanitizeHeatlCard(dynamic input)
        {
            return " Health card sanitization completed.";
        }


    }
}
