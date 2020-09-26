using System;
using System.Threading.Tasks;

namespace QuickStart.Core
{
    public class LocalMethods
    {
        public async Task<object> monitorHealthCard(dynamic input)
        {
            //return AppDomain.CurrentDomain.BaseDirectory;
            return " Health Card check completed.";
        }

        public async Task<object> sanitizeHeatlCard(dynamic input)
        {
            return " Health card sanitization completed.";
        }


    }
    }
